<?php get_header();
$count = 1;
?>

<div class="row">

    <div class="main col-md-9">

        <div class="ak-container ak-main-content">
            <div class="ak-list-paginated">
                <div class="ak-item-list ak-grid-padding">
                    <div class="row">
                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <div class="col-sm-6">

                            <div class="ak-item-elt ak-universe-key-plus-dofus">
                                <div class="ak-item-elt-content">
                                    <a class="ak-link-img" href="/fr/mmorpg/actualites/news/435682-retrouvez-ankama-japan-expo">
                                        <div class="article_image" style="background-image:url(<?php echo catch_that_image() ?>)">
                                        </div>
                                    </a>

                                    <div class="ak-item-elt-inner">
                                        <div class="ak-item-elt-title">
                                            <a href="/fr/mmorpg/actualites/news/435682-retrouvez-ankama-japan-expo">
                                                <img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/cellule.png" class="cellule" alt="L'article s'intitule : <?php echo get_the_title(); ?>
                                                                                                                                                      . Il a été rédigé le : <?php echo get_the_modified_date() ?>"/>
                                            </a>

                                            <span class="ak-text">
                                                <a href="<?php the_permalink(); ?>"><?php echo new_title('...', 5); ?>
                                                </a>
                                                <span class="ak-publication">



                                                    <div class="glyphicon glyphicon-time"></div> <?php echo get_the_date();?> à <?php echo get_the_time(); ?>                      </span>
                                            </span>
                                        </div>
                                        <div class="ak-item-elt-desc">
                                            <?php the_excerpt(); ?>
                                        </div>
                                    </div>
                                    <div class="ak-ellipsis-text"></div>
                                    <div class="ak-bottom">
                                        <div class="ak-comments pull-left">
                                            <a class="comment" href="/fr/mmorpg/actualites/news/435682-retrouvez-ankama-japan-expo#ak-block-posts">
                                                <i class="glyphicon glyphicon-thumbs-up" style="font-size: 16px;"></i>
                                                <span>Partager</span>
                                            </a>
                                        </div>
                                        <div class="ak-bottom-infos pull-left"></div>
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


                    <p><?php _e('Sorry, this page does not exist.'); ?></p>
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

