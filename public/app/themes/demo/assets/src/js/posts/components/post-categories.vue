<template>
  <label>
    Select category
    <select
      v-model="selectedTerm"
      @change="$emit('setCategory', selectedTerm.id)"
    >
      <option :value="{ id: null, name: null }">All</option>
      <template v-for="term in terms" :key="term.id">
        <option :value="term" :selected="term == selectedTerm">
          {{ term.name }}
        </option>
      </template>
    </select>
  </label>
</template>

<script>
import axios from 'axios';

export default {
  emits: ['setCategory'],
  data() {
    return {
      terms: [],
      selectedTerm: { id: null, name: null },
    };
  },
  mounted() {
    this.getTerms();
  },
  methods: {
    getTerms() {
      axios
        .get('/wp-json/wp/v2/categories?per_page=30&hide_empty=true')
        .then((response) => {
          this.isLoading = false;
          if (response.data) {
            response.data.forEach((term) => {
              this.terms.push({
                id: term.id,
                name: term.name,
              });
            });
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
