<div class="row sidebar">
    <div class="col-md-12">
        <h1>Olivier Gourmet nous parraine</h1>
        <div class="row parrain_container">
            <div class="col-xs-5">
                <img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/Sans%20titre-1.png" class="img-responsive parrain round border-red" alt="Olivier Gourmet, notre parrain"/>
            </div>
            <div class="col-xs-7">
                <p class="devise">Comme moi, <br>Soutenez <br>Ouvrir Les Yeux</p>
            </div>
        </div>
        <div class="row newsletter">
            <div class="col-md-12">
                <?php
                    //if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Sidebar') ) ;
                    $widgetNL = new WYSIJA_NL_Widget(true);
                    echo $widgetNL->widget(array('form' => 1, 'form_type' => 'php'));
                ?>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="bouton_sidebar">
                    <span class="d-b-t">Je donne</span>
                </div>
            </div>
            <div class="col-md-6">
                <div class="bouton_sidebar">
                    <span class="s-b-t">Nous soutenir</span>
                </div>
            </div>
        </div>
    </div>
</div>
