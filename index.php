<?php get_header();
$count = 1;
?>

<div class="row main">
    <div class="col-md-8">
        <div class="row article">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div class="col-md-6">
                <div class="article_container">
                <a href="<?php the_permalink(); ?>"><div class="article_image" style="background-image:url(<?php echo catch_that_image() ?>);"></div></a>
                <h1><a href="<?php the_permalink(); ?>"><?php echo shortened_title(); ?></a></h1>
                <hr>
                <?php the_excerpt(); ?>
            </div>
            </div>
            <?php if($count%2==0){ ?>
                </div><div class="row">
            <?php }
                $count ++;
                endwhile; else: 
            ?>
        <p><?php _e('Sorry, this page does not exist.'); ?></p>
        <?php endif; ?>
        </div>

    </div>
    <div class="col-md-4">
        <?php get_sidebar(); ?>
    </div>
</div>

<?php get_footer();?>
