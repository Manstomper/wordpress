import { isRef, ref, unref, watchEffect } from 'vue';
import axios from 'axios';

function getParams(data) {
  if (data.taxonomyTerm) {
    data.taxQuery = {
      taxonomy: data.taxonomyTerm.taxonomy,
      field: 'id',
      terms: data.taxonomyTerm.id,
    };
  }
  else {
    data.taxQuery = null;
  }

  delete data.taxonomyTerm;

  return data;
}

export function usePostQuery(url, data = null) {
  const posts = ref([]);
  const foundPosts = ref(0);

  function query() {
    axios
      .post(unref(url), getParams(unref(data)))
      .then((response) => {
        if (response.data) {
          posts.value = response.data.posts;
          foundPosts.value = response.data.foundPosts;
        }
      })
      .catch(() => {});
  }

  if (isRef(url) || isRef(data)) {
    watchEffect(query);
  } else {
    query();
  }

  return { posts, foundPosts };
}

export function useGetQuery(url) {
  const data = ref([]);

  axios
    .get(unref(url))
    .then((response) => {
      if (response.data) {
        data.value = response.data;
      }
    })
    .catch(() => {});

  return data;
}
