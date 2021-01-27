(function() {

  const {__} = wp.i18n;
  const { registerBlockType } = wp.blocks;
  const { compose, withState } = wp.compose;
  const { withSelect } = wp.data;
  const { URLInput } = wp.editor;
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
      withState({ postUrl: '' })
    )(onEdit),
    save: function() {}
  });

  function onEdit(props) {
    var timer;

    const url = el(
      URLInput, {
        className: 'rig-url-input',
        value: props.postUrl,
        onChange: function(val) {
          window.clearTimeout(timer);
          timer = window.setTimeout(function() {
            if (val.indexOf('http') === 0) {
              wp.apiFetch({
                path: wp.url.addQueryArgs('/rig/posts', { search: val })
              })
              .then(function(results) {
                if (results.length) {
                  props.setAttributes({ postIds: [results[0].id, ...props.attributes.postIds] });
                  props.setState({ postUrl: '' });
                }
              });
            }
          }, 500);
          props.setState({ postUrl: val });
        }
      }
    );

    const items = [];

    if (Array.isArray(props.posts)) {
      props.posts.forEach(function(post) {
        items.push(
          el(
            'li', {
              'data-id': post.id,
              onClick: function(e) {
                const id = parseInt(e.target.dataset.id);
                let ids = [...props.attributes.postIds];
                ids.splice(ids.indexOf(id), 1);
                props.setAttributes({ postIds: ids });
              }
            },
            post.title.rendered
          )
        )
      });
    }

    return [
      url,
      (items.length ? el('ul', { className: 'items' }, items) : null)
    ];
  }

}());
