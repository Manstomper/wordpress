<template>
  <div class="newest-articles">
    <h2>Newest articles</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <a href="{{ article.link }}">
          {{ article.title.rendered }}
        </a>
      </li>
    </ul>
    <button
      type="button"
      :disabled="isLoading || !hasMoreArticles"
      @click="getArticles()"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
      page: 1,
      hasMoreArticles: true,
      isLoading: false,
    };
  },
  methods: {
    getArticles() {
      this.isLoading = true;
      axios
        .get("/wp-json/wp/v2/posts?per_page=2&page=" + this.page)
        .then((response) => {
          this.articles = [...response.data, ...this.articles]
          this.page++;
          this.isLoading = false;
        })
        .catch((error) => {
          if (error.message.indexOf("code 400") !== -1) {
            this.isLoading = false;
            this.hasMoreArticles = false;
          }
        });
    },
  },
  computed: {
    buttonText() {
      if (this.isLoading) {
        return "Loading...";
      }
      if (this.hasMoreArticles) {
        return "Load more articles";
      }
      return "No more articles";
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
