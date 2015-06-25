<?php get_header(); ?>

<div class="row first">
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-12">
                <div class="breadcrumbs" xmlns:v="http://rdf.data-vocabulary.org/#">
                    <?php if(function_exists('bcn_display'))
                        {
                            bcn_display();
                        }
                    ?>
                </div>
            </div>
        </div>
        <div class="container_page">
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <h1><?php the_title(); ?></h1>
           <p class="post-info"> <span class="glyphicon glyphicon-time"></span>  Posté le <?php echo get_the_date();?> à <?php echo get_the_time(); ?></p>
            <hr>
            <div class="post-content"> <?php the_content(); ?> </div>
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
