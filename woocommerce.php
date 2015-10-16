<?php get_header(); ?>


<div class="row first">
    <div class="col-md-9">
        <div class="row">
            <div class="col-md-12">
                <div class="breadcrumbs" xmlns:v="http://rdf.data-vocabulary.org/#">
                    <?php if(function_exists('bcn_display'))
{
    bcn_display();
}?>
                </div>
            </div>
        </div>
        <div class="container_page">
            <?php woocommerce_content(); ?>
        </div>
    </div>
    <div class="col-md-3">
        <?php get_sidebar(); ?>
    </div>
</div>


<?php get_footer(); ?>
