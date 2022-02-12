/**
 * Data store for using a custom REST API endpoint
 */
(function () {
  const actions = {
    getPosts: function (params) {
      return {
        type: 'GET_POSTS',
        params,
      };
    },
    setPosts: function (posts) {
      return {
        type: 'SET_POSTS',
        posts,
      };
    },
  };

  wp.data.registerStore('rig', {
    reducer(state = { posts: {} }, action) {
      if (action.type === 'SET_POSTS') {
        return {
          ...state,
          posts: action.posts,
        };
      }
      return state;
    },
    controls: {
      GET_POSTS: function (action) {
        return wp.apiFetch({
          path: wp.url.addQueryArgs('/rig/posts', action.params),
        });
      },
    },
    actions: actions,
    selectors: {
      getPosts(state) {
        return state.posts;
      },
    },
    resolvers: {
      *getPosts(params) {
        const posts = yield actions.getPosts(params);
        return actions.setPosts(posts);
      },
    },
  });
})();
