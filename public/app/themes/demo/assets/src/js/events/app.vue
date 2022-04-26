<script setup>
import { ref, computed, watch } from 'vue';
import { useGetQuery } from './../vue-use/query';
import { useObserver } from './../vue-use/observer';
import PageNav from './../vue-components/page-nav.vue';

const data = ref({
  perPage: 5,
  page: 1,
});

const searchTerms = ref('');

watch(searchTerms, (value) => {
  if (value.length >= 3) {
    data.value.page = 1;
  }
});

const allEvents = useGetQuery('/wp-json/rig/events');

const filteredEvents = computed(() => {
  if (searchTerms.value.length >= 3) {
    return allEvents.value.filter((item) => {
      return item.title.toLowerCase().includes(searchTerms.value.toLowerCase());
    });
  }
  return allEvents.value.slice(0);
});

const events = computed(() => {
  let startIndex = (data.value.page - 1) * data.value.perPage;
  let endIndex = startIndex + data.value.perPage;
  return filteredEvents.value.slice(startIndex, endIndex);
});

const anchor = ref({});
const anchorInView = useObserver(anchor);

function setPage(pg) {
  data.value.page = pg;
  if (!anchorInView.value) {
    anchor.value.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <h2 ref="anchor">Vue3: Events</h2>
  <p>
    This app fetches all events in one query and filters them on the client
    side, which means it expects a limited amount of items.
  </p>

  <p v-if="!events">No results</p>
  <ul v-else>
    <li v-for="event in events" :key="event.id">
      <time :datetime="event.time">{{ event.time }}</time>
      {{ event.title }}
    </li>
  </ul>

  <input v-model="searchTerms" type="text" placeholder="Search events" />

  <PageNav
    :per-page="data.perPage"
    :page="data.page"
    :item-count="filteredEvents.length"
    @set-page="(pg) => setPage(pg)"
  />
</template>
