<script setup>
import { ref } from 'vue';
import { usePostQuery } from './../vue-use/query';
import { useObserver } from './../vue-use/observer';
import PageNav from './../vue-components/page-nav.vue';
import PostCategories from './components/post-categories.vue';

const data = ref({
  perPage: 3,
  page: 1,
  taxonomy: 'category',
  taxonomyTerm: null,
});

const { posts, foundPosts } = usePostQuery('/wp-json/rig/posts', data);

const anchor = ref({});
const anchorInView = useObserver(anchor);

function setPage(pg) {
  data.value.page = pg;
  if (!anchorInView.value) {
    anchor.value.scrollIntoView({ behavior: 'smooth' });
  }
}

function setTaxonomyTerm(term) {
  data.value.taxonomyTerm = term;
  data.value.page = 1;
}
</script>

<template>
  <h2 ref="anchor">Vue3: Posts</h2>

  <PostCategories @set-category="(term) => setTaxonomyTerm(term)" />

  <ul>
    <li v-for="post in posts" :key="post.id">
      <a :href="post.link">
        {{ post.title }}
      </a>
    </li>
  </ul>

  <PageNav
    :per-page="data.perPage"
    :page="data.page"
    :item-count="foundPosts"
    @set-page="(pg) => setPage(pg)"
  ></PageNav>
</template>
