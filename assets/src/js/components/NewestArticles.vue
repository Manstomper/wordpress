<template>
  <div>
    <article v-for="article in articles">
      <a v-bind:href="article.link">
        <h2>{{ article.title.rendered }}</h2>
        {{ article.excerpt.rendered | striptags }}
      </a>
    </article>

    <button type="button" @click="getArticles" v-bind:disabled="loadingDisabled">Load more articles</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      articles: [],
      page: 1,
      loadingDisabled: false
    }
  },
  methods: {
    getArticles: function() {
      this.loadingDisabled = true;
      axios.get('/wp-json/wp/v2/posts?per_page=2&page=' + this.page)
        .then(response => {
          this.articles = [...this.articles, ...response.data];
          this.page++;
          this.loadingDisabled = false;
        })
        .catch(error => {
          if (error.message.indexOf('code 400') !== -1) {
            this.loadingDisabled = true;
          }
        });
    }
  },
  mounted: function() {
    this.getArticles();
  }
}
</script>