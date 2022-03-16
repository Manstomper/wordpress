<template>
  <div class="posts">
    <div v-if="isLoading" class="loading">Loading&hellip;</div>
    <h2>Posts</h2>
    <select @change="initPosts(1)" v-model="selectedTerm">
      <option :value="{ id: null, name: null }">All</option>
      <template v-for="term in terms" :key="term.id">
        <option :value="term" :selected="term == selectedTerm">
          {{ term.name }}
        </option>
      </template>
    </select>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a :href="post.link">
          {{ post.title }}
        </a>
      </li>
    </ul>
    <div v-if="this.pages > 1">
      <template v-for="item in pageNav" :key="item">
        <button
          type="button"
          :class="{ 'is-active': item.page == page }"
          :disabled="item.isDisabled"
          @click="initPosts(item.page)"
        >
          {{ item.label }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      perPage: 2,
      page: 1,
      pages: 0,
      terms: [],
      selectedTerm: { id: null, name: null },
      isLoading: false,
    };
  },
  methods: {
    initPosts(page) {
      this.page = page;
      this.getPosts();
    },
    getPosts() {
      this.isLoading = true;
      axios
        .post('/wp-json/rig/posts', this.getRequestParams())
        .then((response) => {
          this.isLoading = false;
          if (response.data) {
            this.pages = Math.ceil(response.data.foundPosts / this.perPage);
            this.posts = response.data.posts;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.debug(error);
        });
    },
    getRequestParams() {
      const params = {
        perPage: this.perPage,
        page: this.page,
        taxonomy: 'category',
        taxQuery: null,
        metaQuery: null,
      };
      if (this.selectedTerm.id) {
        params.taxQuery = {
          taxonomy: 'category',
          field: 'id',
          terms: this.selectedTerm.id,
        };
      }
      return params;
    },
    getTerms() {
      axios
        .get('/wp-json/wp/v2/categories')
        .then((response) => {
          this.isLoading = false;
          if (response.data) {
            response.data.forEach((term) => {
              this.terms.push({
                id: term.id,
                name: term.name,
              });
            });
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.debug(error);
        });
    },
    setPage(page) {
      this.page = page;
      this.getPosts();
    },
  },
  computed: {
    pageNav() {
      const midpoint = this.page;
      var start = midpoint - 2;
      var end = midpoint + 2;
      if (end > this.pages) {
        start = this.pages - 4;
        end = this.pages;
      }
      if (start < 1) {
        start = 1;
        end = Math.min(5, this.pages);
      }
      const nav = [];
      nav.push({
        page: this.page - 1,
        label: 'Previous',
        isDisabled: this.page - 1 < 1,
      });
      if (this.page > 3 && this.pages > 5) {
        nav.push({
          page: 1,
          label: 'First page',
          isDisabled: false,
        });
      }
      for (let i = start; i <= end; i++) {
        nav.push({
          page: i,
          label: i,
          isDisabled: this.page == i,
        });
      }
      if (this.pages > 5 && this.pages - this.page > 2) {
        nav.push({
          page: this.pages,
          label: 'Last page',
          isDisabled: false,
        });
      }
      nav.push({
        page: this.page + 1,
        label: 'Next',
        isDisabled: this.page + 1 > this.pages,
      });
      return nav;
    },
  },
  mounted() {
    this.getTerms();
    this.getPosts();
  },
};
</script>
