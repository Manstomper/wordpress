<form action="<?= get_site_url('/'); ?>" method="get">
    <label>
        <?= __('Enter search terms', 'rig'); ?>
        <input type="text" name="s" placeholder="<?= __('Search', 'rig'); ?>&hellip;">
    </label>
    <button type="submit"><?= __('Submit', 'rig'); ?></button>
</form>