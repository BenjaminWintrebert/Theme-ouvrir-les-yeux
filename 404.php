<?php get_header(); ?>


<div class="row">
    <div class="col-md-12">
        <div class="error-template">
            <h1>
                Oups!</h1>
            <h2>
                Erreur 404</h2>
            <div class="error-details">
                Désolé, une erreur a été détecté. La page que vous souhaitez n'existe plus...
            </div>
            <div class="error-actions">
                <a href="<?php echo site_url(); ?>" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                    Retour à l'accueil </a><a href="#" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span> Contact</a>
            </div>
        </div>
    </div>
</div>



<?php get_footer(); ?>


