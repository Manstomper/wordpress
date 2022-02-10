<template>
  <div class="events">
    <h2>Events</h2>
    <ul>
      <li v-for="event in events" :key="event.id">
        <time :datetime="event.time">{{ event.time }}</time>
        {{ event.name }}
      </li>
    </ul>
    <input v-model="searchTerms" type="text" placeholder="Search events" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      allEvents: [
        {
          id: 1,
          name: "Fun will be had",
          time: "2022-14-01 08:00:00",
        },
        {
          id: 2,
          name: "Something fun happens",
          time: "2022-02-23 10:30:00",
        },
        {
          id: 3,
          name: "Cookies are served",
          time: "2022-04-02 09:00:00",
        },
      ],
      searchTerms: "",
    };
  },
  computed: {
    events() {
      if (this.searchTerms.length < 3) {
        return this.allEvents;
      }

      return this.allEvents.filter((event) => {
        return event.name
          .toLowerCase()
          .includes(this.searchTerms.toLowerCase());
      });
    },
  },
};
</script>