<script setup>
import { computed } from 'vue';

defineEmits(['setPage']);

const props = defineProps({
  perPage: {
    type: Number,
    required: true,
    default: 6,
  },
  page: {
    type: Number,
    required: true,
    default: 1,
  },
  itemCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const nav = computed(() => {
  const pages = Math.ceil(props.itemCount / props.perPage);
  const midpoint = props.page;
  var start = midpoint - 2;
  var end = midpoint + 2;

  if (end > pages) {
    start = pages - 4;
    end = pages;
  }
  if (start < 1) {
    start = 1;
    end = Math.min(5, pages);
  }

  const items = [];

  if (props.page > 3 && pages > 5) {
    items.push({
      id: 'first',
      page: 1,
      label: 'First page',
      isDisabled: false,
    });
  }

  items.push({
    id: 'prev',
    page: props.page - 1,
    label: 'Previous',
    isDisabled: props.page - 1 < 1,
  });

  for (let i = start; i <= end; i++) {
    items.push({
      id: 'page' + i,
      page: i,
      label: i,
      isDisabled: props.page == i,
    });
  }

  items.push({
    id: 'next',
    page: props.page + 1,
    label: 'Next',
    isDisabled: props.page + 1 > pages,
  });

  if (pages > 5 && pages - props.page > 2) {
    items.push({
      id: 'last',
      page: pages,
      label: 'Last page',
      isDisabled: false,
    });
  }

  return items;
});
</script>

<template>
  <nav v-if="itemCount > 1">
    <template v-for="item in nav" :key="item.id">
      <button
        type="button"
        :class="{ 'is-active': item.page == page }"
        :disabled="item.isDisabled"
        @click="$emit('setPage', item.page)"
      >
        {{ item.label }}
      </button>
    </template>
  </nav>
</template>
