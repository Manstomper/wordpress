(function() {

  const {__} = wp.i18n;

  wp.blocks.registerBlockType('rig/list-posts', {
    title: __('List posts', 'rig'),
    icon: 'list-view',
    category: 'layout',
    attributes: {
      postIds: {
        type: 'array'
      }
    },
    edit: wp.compose.compose(
      wp.data.withSelect(function(select, props) {
        const hasPostIds = props.attributes.postIds && props.attributes.postIds.length;
        return {posts: hasPostIds ? select('rig').getPosts({include: props.attributes.postIds}) : []};
      }),
      wp.compose.withState({postUrl: []})
    )(onEdit),
    save: function() {}
  });

  function onEdit(props) {
    var timer;

    const getPost = function(val) {
      wp.apiFetch({
        path: wp.url.addQueryArgs('/rig/posts', {search: val})
      })
      .then(function(results) {
        props.setAttributes({postIds: (props.attributes.postIds ? props.attributes.postIds.concat([results[0].id]) : [results[0].id])});
      });
    }

    const url = wp.element.createElement(
      wp.editor.URLInput, {
        value: props.postUrl,
        onChange: function(val) {
          window.clearTimeout(timer);
          timer = window.setTimeout(function() {
            if (val.indexOf('http') === 0) {
              getPost(val);
            }
          }, 500);
          props.setState({postUrl: val});
        }
      }
    );

    const removePost = function(e) {
      let ids = [];
      for (let i = 0; i < props.attributes.postIds.length; i++) {
        if (props.attributes.postIds[i] != e.currentTarget.dataset.id) {
          ids.push(props.attributes.postIds[i]);
        }
      }
      props.setAttributes({postIds: ids});
    };

    const items = [];

    if (Array.isArray(props.posts)) {
      props.posts.forEach(function(value) {
        items.push(
          wp.element.createElement('li', null,
            wp.element.createElement(wp.components.IconButton,
              {
                icon: 'no-alt',
                onClick: removePost,
                'data-id': value.id
              }
            ),
            value.title.rendered
          )
        )
      });
    }

    return [
      url,
      (items.length ? wp.element.createElement('ul', {className: 'items'}, items) : null),
    ];
  }

}());
