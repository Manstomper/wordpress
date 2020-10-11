<form action="<?= get_site_url('/'); ?>" method="get">
  <label for="search-input"><?= __('Enter search terms', 'rig'); ?></label>
  <input id="search-input" type="text" name="s" placeholder="<?= __('Search', 'rig'); ?>&hellip;">
  <button type="submit"><?= __('Submit', 'rig'); ?></button>
</form>