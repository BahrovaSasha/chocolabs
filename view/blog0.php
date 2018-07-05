<p>Archive</p>
<?php foreach($posts as $value): ?>
    <p><?php echo $value->title; ?></p>
    <a href = '<?php echo base_url() . 'blog/post/' . $value->id; ?>'>read more...</a>
<?php endforeach; ?>


