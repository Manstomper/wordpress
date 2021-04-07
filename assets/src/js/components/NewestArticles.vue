<template>
  <div>
    <article v-for="article in articles" :key="article.id">
      <a :href="article.link">
        <h2>{{ article.title.rendered }}</h2>
        <p>{{ article.excerpt.rendered | striptags }}</p>
        <div v-html="article.excerpt.rendered"></div>
      </a>
    </article>

    <button
      type="button"
      @click="getArticles"
      :disabled="isLoading || !hasMorePosts"
    >
      <span v-if="!isLoading && hasMorePosts">Load more articles</span>
      <span v-if="isLoading">Loading...</span>
      <span v-if="!hasMorePosts">No more posts</span>
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      articles: [],
      page: 1,
      hasMorePosts: true,
      isLoading: false,
    };
  },
  methods: {
    getArticles: function () {
      this.isLoading = true;
      axios
        .get("/wp-json/wp/v2/posts?per_page=2&page=" + this.page)
        .then((response) => {
          this.articles = [...this.articles, ...response.data];
          this.page++;
          this.isLoading = false;
        })
        .catch((error) => {
          if (error.message.indexOf("code 400") !== -1) {
            this.isLoading = false;
            this.hasMorePosts = false;
          }
        });
    },
  },
  mounted: function () {
    this.getArticles();
  },
};
</script>