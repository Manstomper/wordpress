<template>
  <h2 ref="anchor">Vue3 example</h2>
  <p>This app gets the latest posts. It fetches 5 posts at a time.</p>

  <div v-if="isLoading" class="loading">Loading&hellip;</div>

  <PostCategories @set-category="(id) => setCategory(id)" />

  <ul v-if="posts.length">
    <li v-for="post in posts" :key="post.id">
      <a :href="post.link">
        {{ post.title }}
      </a>
    </li>
  </ul>

  <p v-if="!posts.length && !isLoading">No results</p>

  <PageNav
    :per-page="perPage"
    :page="page"
    :pages="pages"
    @set-page="(pg) => setPage(pg)"
  />
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
      observer: false,
      anchorInView: false,
      isLoading: false,
    };
  },
  mounted() {
    this.getPosts();
    this.observer = new IntersectionObserver((entry) => {
      this.anchorInView = entry[0].isIntersecting;
    }).observe(this.$refs.anchor);
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  methods: {
    setCategory(id) {
      this.selectedCategoryId = id;
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
    setPage(pg) {
      this.page = pg;
      if (!this.anchorInView) {
        this.$refs.anchor.scrollIntoView();
      }
    },
  },
};
</script>
