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
      allEvents: [],
      searchTerms: '',
    };
  },
  computed: {
    filteredEvents() {
      if (this.searchTerms.length < 3) {
        return this.allEvents.slice(0);
      } else {
        return this.allEvents.filter((element) => {
          return element.title
            .toLowerCase()
            .includes(this.searchTerms.toLowerCase());
        });
      }
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
    }
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
