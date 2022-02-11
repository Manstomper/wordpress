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
    <div class="pagination">
      <template v-for="index in pages" :key="index">
        <button type="button" :disabled="index == page" @click="page = index">
          {{ index }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 3,
      page: 1,
      pages: 0,
      allEvents: [
        {
          id: 1,
          name: 'Fun will be had',
          time: '2022-14-01 08:00:00',
        },
        {
          id: 2,
          name: 'Something fun happens',
          time: '2022-02-23 10:30:00',
        },
        {
          id: 3,
          name: 'Skiing through a revolving door, lesson 1',
          time: '2022-05-12 09:00:00',
        },
        {
          id: 4,
          name: 'Skiing through a revolving door, lesson 2',
          time: '2022-05-13 09:00:00',
        },
        {
          id: 5,
          name: 'Skiing through a revolving door, lesson 3',
          time: '2022-05-14 09:00:00',
        },
        {
          id: 6,
          name: 'Skiing through a revolving door, lesson 4',
          time: '2022-05-15 09:00:00',
        },
        {
          id: 7,
          name: 'Skiing through a revolving door, lesson 5',
          time: '2022-05-16 09:00:00',
        },
        {
          id: 8,
          name: 'Skiing through a revolving door, lesson 6',
          time: '2022-05-17 09:00:00',
        },
        {
          id: 9,
          name: 'Skiing through a revolving door, lesson 7',
          time: '2022-05-18 09:00:00',
        },
        {
          id: 10,
          name: 'Skiing through a revolving door, lesson 8',
          time: '2022-05-19 09:00:00',
        },
        {
          id: 11,
          name: 'Cookies are served',
          time: '2023-08-02 09:40:00',
        },
      ],
      searchTerms: '',
    };
  },
  computed: {
    events() {
      let filtered;
      if (this.searchTerms.length > 2) {
        this.page = 1;
        filtered = this.allEvents.filter((element) => {
          return element.name
            .toLowerCase()
            .includes(this.searchTerms.toLowerCase());
        });
      } else {
        filtered = this.allEvents.slice(0);
      }
      this.pages = Math.ceil(filtered.length / this.perPage);
      let startIndex = (this.page - 1) * this.perPage;
      let endIndex = startIndex + this.perPage;
      return filtered.slice(startIndex, endIndex);
    },
  },
};
</script>
