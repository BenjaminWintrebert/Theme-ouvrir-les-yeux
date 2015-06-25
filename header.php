<!DOCTYPE html>
<?php if(isset($_GET['color'])){
    $color=$_GET['color']; 
}
else{
    $color=$_COOKIE['color']; 
}?>
<html lang="fr" id="<?php echo $color; ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="Ouvrir Les Yeux soutient les personnes atteintes de Neuropathies Optiques Héréditaires et leurs proches, et finance la Recherche">
        <meta name="author" content="BaBe">
        <link rel="icon" href="../../favicon.ico">
        <meta http-equiv="cache-control" content="no-cache" />
        <title>Site de l’association Ouvrir Les Yeux</title>


        <link href="<?php bloginfo('stylesheet_url');?>" rel="stylesheet">

        <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
        <?php wp_enqueue_script("wpbootstrap_scripts_with_jquery"); ?>
        <?php wp_head(); ?>
    </head>

    <body>
        <div class="container">
            <div class="row">
                <div class="header_ban col-md-12">
                    <a href="<?php echo site_url(); ?>"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/header.png" alt="Bannière Ouvrir Les Yeux" class="img-responsive"/></a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="row" id="pre-nav">
                        <div id="don-soutien" class="col-md-3 col-xs-6">
                            <a href="http://www.ouvrirlesyeux.org/le-soutien/dons/"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/logo_don.png" alt="Bouton des dons"/>DON</a>
                            <a href="http://www.ouvrirlesyeux.org/le-soutien"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/logo_soutien.png"  alt="Bouton des soutiens"/>SOUTIEN</a>
                        </div>
                        <div id="mediatheque" class="col-md-3 col-xs-6">
                            <a href=# title="Bouton : Visionner des contenus"><span class="flaticon-computerscreen11"></span></a>
                            <a href=# title="Bouton : Voir des contenus"><span class="flaticon-picture64"></span></a>
                            <a href=# title="Bouton : Lire des contenus"><span class="flaticon-news2"></span></a>
                            <a href=# title="Bouton : Écouter des contenus"><span class="flaticon-headphone4"></span></a>
                        </div>
                        <div id="recherche" class="col-md-3">

                            <form method="get" id="searchform" action="<?php bloginfo('home'); ?>/">
                                <div class="input-group custom-search-form">
                                    <span class="input-group-btn">
                                        <button title="Bouton de recherche" type="submit" class="btn btn-default" type="button">
                                            <span class="glyphicon glyphicon-search"></span>
                                        </button>
                                    </span>
                                    <input type="text" value="<?php the_search_query(); ?>" name='s' id='s' class="form-control" maxlength="64" placeholder="Rechercher...">
                                </div><!-- /input-group -->
                            </form>

                        </div>
                        <div id="accessibilite" class="col-md-3">
                            <a href="<?php bloginfo('home');?>?color=jaune" class="access_lien"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/access/jaune.png" alt ="Bouton des contrastes : noir sur jaune" class="access_img"/></a>
                            <a href="<?php bloginfo('home');?>?color=blanc" class="access_lien"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/access/blanc.png" alt ="Bouton des contrastes : noir sur blanc" class="access_img"/></a>
                            <a href="<?php bloginfo('home');?>?color=bleu" class="access_lien"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/access/bleu.png" alt ="Bouton des contrastes : jaune sur bleu" class="access_img"/></a>
                            <a href="<?php bloginfo('home');?>?color=noir" class="access_lien"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/access/noir.png" alt ="Bouton des contrastes : blanc sur noir" class="access_img"/></a>
                            <a href="<?php bloginfo('home');?>?color=rouge" class="access_lien"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/access/rouge.png" alt ="Bouton des contrastes : blanc sur rouge" class="access_img"/></a>
                            <a href="<?php bloginfo('home');?>?color=reset" class="access_lien"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/access/reset.png" alt ="Bouton pour réinitialiser les contrastes" class="access_img"/></a>
                        </div>

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="header_ban col-md-12">
                    <nav id="menu" class="navbar navbar-default" role="navigation">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header visible-xs">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="<?php echo site_url(); ?>"><?php bloginfo('name'); ?></a>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse navbar-ex1-collapse">
                            <?php wp_nav_menu(array(
    'container_class' => 'menu-header',
    'theme_location' => 'primary',
    'items_wrap' => '<ul id="%1$s" class="%2$s nav navbar-nav">%3$s</ul>',
    'walker' => new BS3_Walker_Nav_Menu,
)); ?>
                        </div><!-- /.navbar-collapse -->
                    </nav>
                </div>
            </div>
