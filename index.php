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
                                                <img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/cellule.png" class="cellule" alt="L'article s'intitule : <?php  echo get_the_title() ?>. Il a été rédigé le : <?php echo get_the_modified_date() ?>"/>
                                            </a>

                                            <span class="ak-text">
                                                <a href="<?php the_permalink(); ?>"><?php echo shortened_title(); ?></a>
                                                <span class="ak-publication">



                                                    Ouvrir Les Yeux - <?php echo get_the_modified_date();?>                      </span>
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
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="866.001px" height="866.013px" viewBox="930.736 591.271 866.001 866.013" enable-background="new 930.736 591.271 866.001 866.013" xml:space="preserve">
                                                    <path fill="#010202" d="M930.736,1186.67v54.084c0,29.905,24.229,54.148,54.124,54.148h54.115l0,0h54.134v162.382l243.555-162.382
                                                                            h351.804c0.021,0,0.03,0,0.04,0h54.104c29.885,0,54.125-24.243,54.125-54.148v-595.37c0-29.897-24.24-54.112-54.125-54.112h-108.26
                                                                            h-108.248l0,0h-432.976c-0.01,0-0.01,0-0.01,0H984.86c-29.895,0-54.124,24.214-54.124,54.112v54.127l0,0V1186.67L930.736,1186.67z
                                                                            M1038.975,699.511h108.27l0,0h432.985l0,0h108.238v378.861v108.298h-108.238l0,0h-243.565l-135.306,81.165v-81.165h-54.114l0,0
                                                                            h-108.27V699.511z M1526.104,1078.372h54.114V970.125h-432.975v108.298h378.86V1078.372z M1580.219,807.766h-432.975v108.24h432.975
                                                                            V807.766z"></path>
                                                </svg>
                                                <span>Partager</span>
                                            </a>
                                        </div>
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

