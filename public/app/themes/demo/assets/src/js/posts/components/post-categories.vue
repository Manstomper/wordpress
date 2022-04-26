<script setup>
import { useGetQuery } from './../../vue-use/query';

defineEmits(['setCategory']);

const selectedTerm = null;
const terms = useGetQuery(
  '/wp-json/wp/v2/categories?per_page=30&hide_empty=true'
);
</script>

<template>
  <label>
    Select category
    <select v-model="selectedTerm" @change="$emit('setCategory', selectedTerm)">
      <option :value="null">All</option>
      <template v-for="term in terms" :key="term.id">
        <option :value="term">
          {{ term.name }}
        </option>
      </template>
    </select>
  </label>
  {{ selectedTerm }}
</template>
