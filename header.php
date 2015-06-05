<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="../../favicon.ico">

        <title>OLY | Site de l'association Ouvrir Les Yeux</title>


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
                    <div id="pre-nav">
                        <div id="don-soutien" class="col-md-3">

                            <a href=#><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/logo_don.png" alt="Bouton des dons"/>DON</a>
                            <a href=#><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/logo_soutien.png"  alt="Bouton des soutiens"/>SOUTIEN</a>  
                        </div>
                        <div id="mediatheque" class="col-md-3">
                            dfdf
                        </div>
                        <div id="recherche" class="col-md-3">
                            dfdf
                        </div>
                        <div id="accessibilite" class="col-md-3">
                            fddfdf
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
