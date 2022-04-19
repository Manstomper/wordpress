<template>
  <h2 ref="anchor">Vue3 example</h2>
  <p>
    This app gets a hard-coded list of events. All items are fetched in one
    query and filtered on the client side, which means it expects a limited
    amount of posts.
  </p>

  <div v-if="isLoading" class="loading">Loading&hellip;</div>

  <ul v-if="events.length">
    <li v-for="event in events" :key="event.id">
      <time :datetime="event.time">{{ event.time }}</time>
      {{ event.title }}
    </li>
  </ul>

  <p v-if="!events.length && !isLoading">No results</p>

  <input v-model="searchTerms" type="text" placeholder="Search events" />

  <PageNav
    :per-page="perPage"
    :page="page"
    :pages="pages"
    @set-page="(pg) => setPage(pg)"
  />
</template>

<script>
import PageNav from './../vue-components/page-nav.vue';
import axios from 'axios';

export default {
  components: { PageNav },
  data() {
    return {
      perPage: 5,
      page: 1,
      allEvents: [],
      searchTerms: '',
      observer: false,
      anchorInView: false,
      isLoading: false,
    };
  },
  computed: {
    filteredEvents() {
      if (this.searchTerms.length < 3) {
        return this.allEvents.slice(0);
      }
      return this.allEvents.filter((element) => {
        return element.title
          .toLowerCase()
          .includes(this.searchTerms.toLowerCase());
      });
    },
    events() {
      let startIndex = (this.page - 1) * this.perPage;
      let endIndex = startIndex + this.perPage;
      return this.filteredEvents.slice(startIndex, endIndex);
    },
    pages() {
      return Math.ceil(this.filteredEvents.length / this.perPage);
    },
  },
  watch: {
    searchTerms(value) {
      if (value.length >= 3 && this.page > this.pages) {
        this.page = 1;
      }
    },
  },
  mounted() {
    this.getEvents();
    this.observer = new IntersectionObserver((entry) => {
      this.anchorInView = entry[0].isIntersecting;
    }).observe(this.$refs.anchor);
  },
  beforeUnmount() {
    this.observer.disconnect();
  },
  methods: {
    getEvents() {
      this.isLoading = true;
      axios
        .get('/wp-json/rig/events')
        .then((response) => {
          this.isLoading = false;
          if (response.data) {
            this.allEvents = response.data;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.debug(error);
        });
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
