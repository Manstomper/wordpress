import Vue from 'vue/dist/vue.min.js';
import axios from "axios";

new Vue({
  el: '#newest-articles',
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
          this.articles = [...this.articles, ...response.data];
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
      if (!this.isLoading && this.hasMoreArticles) {
        return 'Load more articles';
      }

      if (this.isLoading) {
        return 'Loading...';
      }

      return 'No more articles';
    },
  },
  mounted() {
    this.getArticles();
  },
});
