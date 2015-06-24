<?php
$associations = array("http://www.association-ammi.org/","http://www.afm-telethon.fr/","http://www.avh.asso.fr/","http://www.alliance-maladies-rares.org/");
$prives = array("http://www.girgravure.com/","http://terreplurielle.com/terreplurielle/","http://www.iscom.fr/","http://www.rclens.fr/","http://www.fo-rothschild.fr/");
$publiques = array("http://lievin.fr/","http://www.letouquet.com/","http://www.saveursenor.com/","http://www.iut-lens.univ-artois.fr/","http://www.francebleu.fr/station/france-bleu-nord");
$artistes = array("http://www.baumann-photo.net/","http://www.delambre-cartoon.com/","https://www.facebook.com/pages/Olivier-Gourmet/105998169430482","http://www.fleuve-editions.fr/livres-romans/auteurs/franck-thilliez/","http://www.thomasfersen.fr/","http://www.steevenetchristopher.fr/","http://www.gilbertmontagne.com/");
$sportifs = array("http://tresor-makunda.e-monsite.com/","http://judo-lorient-frebault.clubeo.com/dirigeants/gerald-rollo.html","https://en.wikipedia.org/wiki/Antoine_Perel","http://www.jeremypoincenot.com/");

aleatpar(4,"associations");
aleatpar(5,"prives");
aleatpar(5,"publiques");
aleatpar(7,"artistes");
aleatpar(4,"sportifs");



function aleatpar($n,$p){//$n = nb partenaire, $p = dossier partenaire
?>
<div class="row ">
    <?php if($p=="prives"||$p=="publiques"){
    if($p=="prives"){?>
        <div class="col-md-12"><h1>Des structures privées</h1></div>
    <?php }
    else { ?>
        <div class="col-md-12"><h1>Des structures <?php echo $p; ?></h1></div>
    <?php } }
                         else{
    ?>
    <div class="col-md-12"><h1>Des <?php echo $p; ?></h1></div><?php } ?>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <?php
                         $NbDispo = range(1, $n+1); // tableau de toutes les valeurs possibles
                         $NbTires = array_rand($NbDispo, 4);
                         $a = $NbTires[1];
                         $b = $NbTires[2];
                         $c = $NbTires[3];

                ?>
                <div class="col-xs-4">
                    <a href="<?php echo $$p[$a]; ?>"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/partenaires/<?php echo $p; ?>/<?php echo $NbTires[1]; ?>.jpg" class="img-responsive"/></a>
                </div>
                <div class="col-xs-4">
                    <a href="<?php echo $$p[$b]; ?>"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/partenaires/<?php echo $p; ?>/<?php echo $NbTires[2]; ?>.jpg" class="img-responsive"/></a>
                </div>
                <div class="col-xs-4">
                    <a href="<?php echo $$p[$c]; ?>"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/partenaires/<?php echo $p; ?>/<?php echo $NbTires[3]; ?>.jpg" class="img-responsive"/></a>
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
