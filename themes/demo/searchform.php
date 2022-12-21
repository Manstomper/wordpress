<form action="<?= home_url('/'); ?>" method="get">
    <label>
        <?= rig_translate('Enter search terms'); ?>
        <input type="text" name="s" placeholder="<?= rig_translate('Search'); ?>&hellip;">
    </label>
    <button type="submit"><?= rig_translate('Submit'); ?></button>
</form>
