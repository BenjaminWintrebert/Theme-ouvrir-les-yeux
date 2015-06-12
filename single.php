<?php get_header(); ?>


<div class="row first">
    <div class="col-md-9">
        <div class="container_page">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <h1><?php the_title(); ?></h1>
            <p class="post-info"> Posté le <?php the_date(); ?> dans <?php the_category(', '); ?> par <?php the_author(); ?>. </p>
            <div class="post-content"> <?php the_content(); ?> </div>
            <div class="post-comments"> <?php comments_template(); ?> </div>
            <?php endwhile; else: ?>
            <p><?php _e("Désolé, cette page n'existe pas."); ?></p>
            <?php endif; ?>
        </div>
    </div>
    <div class="col-md-3">
        <?php get_sidebar(); ?>
    </div>
</div>


<?php get_footer(); ?>
