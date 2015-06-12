<div class="row">
    <div class="main col-md-12">
        <div class="oly-container oly-main-content">
            <div class="oly-list-paginated">
                <div class="oly-item-list oly-grid-padding-featured">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="oly-item-elt">
                                <div class="oly-item-elt-content">
                                    <div class="oly-item-elt-title">
                                        <a href="<?php the_permalink(); ?>">
                                            <img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/etoile.png" class="cellule glyphicon glyphicon-star" alt="L'article s'intitule : <?php echo get_the_title(); ?>
                                                                                                                                                      . Il a été rédigé le : <?php echo get_the_date() ?> à <?php echo get_the_time() ?>"/>
                                        </a>

                                        <span class="oly-text">
                                            <a href="<?php the_permalink(); ?>"><?php echo new_title('...', 8); ?>
                                            </a>
                                        </span>
                                    </div>
                                    <a class="oly-link-img" href="/fr/mmorpg/actualites/news/435682-retrouvez-ankama-japan-expo">
                                        <div class="article_image" style="background-image:url(<?php echo catch_that_image() ?>)">
                                        </div>
                                    </a>
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



                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

