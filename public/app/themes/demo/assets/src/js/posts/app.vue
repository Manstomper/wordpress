<template>
  <div class="posts">
    <div v-if="isLoading" class="loading">Loading&hellip;</div>
    <h2>Posts</h2>
    <p>This is an example vue3 app that gets latest posts.</p>
    <PostCategories @set-category="(id) => setCategory(id)" />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a :href="post.link">
          {{ post.title }}
        </a>
      </li>
    </ul>
    <PageNav
      :per-page="perPage"
      :page="page"
      :pages="pages"
      @set-age="(page) => getPosts(page)"
    />
  </div>
</template>

<script>
import PostCategories from './components/post-categories.vue';
import PageNav from './../vue-components/page-nav.vue';
import axios from 'axios';

export default {
  components: { PostCategories, PageNav },
  data() {
    return {
      posts: [],
      perPage: 5,
      page: 1,
      pages: 0,
      selectedCategoryId: null,
      isLoading: false,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    setCategory(id) {
      this.selectedCategoryId = id;
      this.getPosts();
    },
    getPosts(page = 1) {
      this.isLoading = true;
      this.page = page;
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
      };
      if (this.selectedCategoryId) {
        params.taxQuery = {
          taxonomy: 'category',
          field: 'id',
          terms: this.selectedCategoryId,
        };
      }
      return params;
    },
  },
};
</script>
