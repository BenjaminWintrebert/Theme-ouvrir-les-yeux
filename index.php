<?php
get_header();
$count = 1;
?>

<div class="row">
    <div class="main col-md-9">
        <div class="featured">
            <?php include('featured.php'); ?>
        </div>
        <div class="oly-container oly-main-content">
            <div class="oly-list-paginated">
                <div class="oly-item-list oly-grid-padding">
                    <div class="row">
<?php
if (have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <div class="col-sm-6">

                            <div class="oly-item-elt">
                                <div class="oly-item-elt-content">
                                    <a class="oly-link-img" href="<?php the_permalink(); ?>">
                                        <div class="article_image" style="background-image:url(<?php echo catch_that_image() ?>)">
                                        </div>
                                    </a>

                                    <div class="oly-item-elt-inner">
                                        <div class="oly-item-elt-title">
                                            <a href="<?php the_permalink(); ?>">
                                                <img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/cellule.png" class="cellule" alt="L'article s'intitule : <?php echo get_the_title(); ?>
                                                                                                                                                      . Il a été rédigé le : <?php echo get_the_date() ?> à <?php echo get_the_time() ?>"/>
                                            </a>

                                            <span class="oly-text">
                                                <a href="<?php the_permalink(); ?>"><?php echo new_title('...', 8); ?>
                                                </a>
                                                <span class="oly-publication">



                                                    <div class="glyphicon glyphicon-time"></div> <?php echo get_the_date();?> à <?php echo get_the_time(); ?>                      </span>
                                            </span>
                                        </div>
                                        <div class="oly-item-elt-desc">
                                            <?php the_excerpt(); ?>
                                        </div>
                                    </div>
                                    <div class="oly-ellipsis-text"></div>
                                    <div class="oly-bottom">
                                        <div class="oly-comments pull-left">
                                            <a class="comment" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank">
                                                <i class="glyphicon glyphicon-thumbs-up" style="font-size: 16px;"></i>
                                                <span>Partager</span>
                                            </a>
                                        </div>
                                        <div class="oly-bottom-infos pull-left"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <?php if($count%2==0){ ?>
                    </div>


                    <div class="row">
                        <?php } $count ++;

endwhile; else:
                        ?>
                    </div>




                    
                        <?php
                            wp_redirect( $location, $status );
                            exit;
                        ?>

                        <?php endif; ?>
                    <div class="row pagination">
                        <?php
if ( function_exists('wp_bootstrap_pagination') )
    wp_bootstrap_pagination();
                        ?>

                    </div>
                </div>

            </div>

        </div>

    </div>
</div>
<div class="col-md-3">
    <?php get_sidebar(); ?>
</div>
</div>







<?php get_footer();?>

