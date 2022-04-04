<template>
  <nav v-if="pages > 1">
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

<script>
export default {
  props: {
    perPage: {
      type: Number,
      required: true,
      default: 5,
    },
    page: {
      type: Number,
      required: true,
      default: 1,
    },
    pages: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  emits: ['setPage'],
  computed: {
    nav() {
      const nav = [];
      const midpoint = this.page;
      var start = midpoint - 2;
      var end = midpoint + 2;
      if (end > this.pages) {
        start = this.pages - 4;
        end = this.pages;
      }
      if (start < 1) {
        start = 1;
        end = Math.min(5, this.pages);
      }
      if (this.page > 3 && this.pages > 5) {
        nav.push({
          id: 'first',
          page: 1,
          label: 'First page',
          isDisabled: false,
        });
      }
      nav.push({
        id: 'prev',
        page: this.page - 1,
        label: 'Previous',
        isDisabled: this.page - 1 < 1,
      });
      for (let i = start; i <= end; i++) {
        nav.push({
          id: 'page' + i,
          page: i,
          label: i,
          isDisabled: this.page == i,
        });
      }
      nav.push({
        id: 'next',
        page: this.page + 1,
        label: 'Next',
        isDisabled: this.page + 1 > this.pages,
      });
      if (this.pages > 5 && this.pages - this.page > 2) {
        nav.push({
          id: 'last',
          page: this.pages,
          label: 'Last page',
          isDisabled: false,
        });
      }
      return nav;
    },
  },
};
</script>
