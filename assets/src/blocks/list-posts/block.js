(function() {

  const {__} = wp.i18n;
  const { registerBlockType } = wp.blocks;
  const { compose, withState } = wp.compose;
  const { withSelect } = wp.data;
  const { URLInput } = wp.editor;
  const { IconButton } = wp.components;
  const el = wp.element.createElement;

  registerBlockType('rig/list-posts', {
    title: __('List posts', 'rig'),
    icon: 'list-view',
    category: 'layout',
    attributes: {
      postIds: {
        type: 'array'
      }
    },
    edit: compose(
      withSelect(function(select, props) {
        const hasPostIds = props.attributes.postIds && props.attributes.postIds.length;
        return { posts: hasPostIds ? select('rig').getPosts({include: props.attributes.postIds}) : [] };
      }),
      withState({ postUrl: '', isURLInputOpen: false })
    )(onEdit),
    save: function() {}
  });

  function onEdit(props) {
    var timer;

    const getPost = function(val) {
      wp.apiFetch({
        path: wp.url.addQueryArgs('/rig/posts', { search: val })
      })
      .then(function(results) {
        const ids = (props.attributes.postIds ? props.attributes.postIds.concat([results[0].id]) : [results[0].id]);
        props.setAttributes({ postIds: ids });
      });
    }

    const url = el(
      URLInput, {
        value: props.postUrl,
        onChange: function(val) {
          window.clearTimeout(timer);
          timer = window.setTimeout(function() {
            if (val.indexOf('http') === 0) {
              getPost(val);
            }
          }, 500);
          props.setState({ postUrl: val });
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
      props.setAttributes({ postIds: ids });
    };

    const items = [];

    if (Array.isArray(props.posts)) {
      props.posts.forEach(function(value) {
        items.push(
          el('li', null,
            el(IconButton,
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
      (items.length ? el('ul', { className: 'items' }, items) : null),
      url
    ];
  }

}());
