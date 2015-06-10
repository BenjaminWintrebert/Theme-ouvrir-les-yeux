<?php get_header();
$count = 1;
?>

<div class="row main">
    <div class="col-md-9">
        <div class="row article">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div class="col-md-6">
                <div class="article_container">
                    <a href="<?php the_permalink(); ?>">
                        <div class="article_image" style="background-image:url(<?php echo catch_that_image() ?>);">
                            <p class="article_date"><?php echo get_the_modified_date(); ?></p>
                        </div>
                    </a>
                    <div class="article_desc">
                        <h1 class="hyphenate"><a href="<?php the_permalink(); ?>"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/cellule.png" class="cellule" alt="<?php  echo get_the_title(); ?>"/><?php echo shortened_title(); ?></a></h1>
                        <div class="separator"></div>
                        <?php the_excerpt(); ?>
                    </div>
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
        <div class="row pagination">
            <?php
if ( function_exists('wp_bootstrap_pagination') )
    wp_bootstrap_pagination();
            ?>

        </div>
    </div>
    <div class="col-md-3">
        <?php get_sidebar(); ?>
    </div>
</div>

<?php get_footer();?>
