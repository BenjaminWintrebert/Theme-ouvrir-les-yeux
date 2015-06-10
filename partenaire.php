
<?php
aleatpar(4,"associations");
aleatpar(5,"prives");
aleatpar(5,"publiques");
aleatpar(7,"artistes");
aleatpar(4,"sportifs");

function aleatpar($n,$p){//$n = nb partenaire, $p = dossier partenaire
?>
<div class="row">
    <div class="col-md-12"><h1><?php echo $p; ?></h1></div>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <?php
                         $NbDispo = range(1, $n); // tableau de toutes les valeurs possibles
                         $NbTires = array_rand($NbDispo, 4);
                ?>
                <div class="col-md-4">
                    <img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/partenaires/<?php echo $p; ?>/<?php echo $NbTires[1]; ?>.jpg" class="img-responsive"/>
                </div>
                <div class="col-md-4">
                    <img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/partenaires/<?php echo $p; ?>/<?php echo $NbTires[2]; ?>.jpg" class="img-responsive"/>
                </div>
                <div class="col-md-4">
                    <img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/partenaires/<?php echo $p; ?>/<?php echo $NbTires[3]; ?>.jpg" class="img-responsive"/>
                </div>
                <?php
                ?>
            </div>
        </div>

    </div>
</div>
<?php
                        }

?>
