<template>
  <div class="events">
    <h2>Events</h2>
    <p>This is an example vue3 app that gets a static list of events.</p>
    <ul>
      <li v-for="event in events" :key="event.id">
        <time :datetime="event.time">{{ event.time }}</time>
        {{ event.title }}
      </li>
    </ul>
    <input v-model="searchTerms" type="text" placeholder="Search events" />
    <PageNav
      :per-page="perPage"
      :page="page"
      :pages="pages"
      @set-page="(pg) => (page = pg)"
    />
  </div>
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
      pages: 0,
      allEvents: [],
      searchTerms: '',
    };
  },
  computed: {
    events() {
      let filtered;
      if (this.searchTerms.length > 2) {
        filtered = this.allEvents.filter((element) => {
          return element.title
            .toLowerCase()
            .includes(this.searchTerms.toLowerCase());
        });
      } else {
        filtered = this.allEvents.slice(0);
      }
      /*this.pages = Math.ceil(filtered.length / this.perPage);
      if (this.page > this.pages) {
        this.page = 1;
      }*/
      let pages = Math.ceil(filtered.length / this.perPage);
      let page = this.page;
      if (this.page > pages) {
        page = 1;
      }
      let startIndex = (page - 1) * this.perPage;
      let endIndex = startIndex + this.perPage;
      return filtered.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.getEvents();
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
  },
};
</script>
