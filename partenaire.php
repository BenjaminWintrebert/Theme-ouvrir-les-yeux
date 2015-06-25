<?php


aleatpar(4,"associations");
aleatpar(7,"prives");
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
    <div class="col-md-12"><h1>Des <?php echo $p;?></h1></div><?php } ?>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <?php
                         $NbDispo = range(1, $n+1); // tableau de toutes les valeurs possibles
                         $NbTires = array_rand($NbDispo, 4);
                         $a = $NbTires[1];
                         $b = $NbTires[2];
                         $c = $NbTires[3];
                         $associations = array("http://www.association-ammi.org/","http://www.afm-telethon.fr/","http://www.avh.asso.fr/","http://www.alliance-maladies-rares.org/");
                         $prives = array("http://www.girgravure.com/","http://terreplurielle.com/terreplurielle/","http://www.iscom.fr/","http://www.rclens.fr/","http://www.fo-rothschild.fr/","http://www.fondation-groupama.com/","http://www.fondationorange.com/");
                         $publiques = array("http://lievin.fr/","http://www.letouquet.com/","http://www.saveursenor.com/","http://www.iut-lens.univ-artois.fr/","http://www.francebleu.fr/station/france-bleu-nord");
                         $artistes = array("http://www.baumann-photo.net/","http://www.delambre-cartoon.com/","https://www.facebook.com/pages/Olivier-Gourmet/105998169430482","http://www.fleuve-editions.fr/livres-romans/auteurs/franck-thilliez/","http://www.thomasfersen.fr/","http://www.steevenetchristopher.fr/","http://www.gilbertmontagne.com/");
                         $sportifs = array("http://tresor-makunda.e-monsite.com/","http://judo-lorient-frebault.clubeo.com/dirigeants/gerald-rollo.html","https://en.wikipedia.org/wiki/Antoine_Perel","http://www.jeremypoincenot.com/");
                         $alt=[
                            "http://www.association-ammi.org/"=>"AMMI",
                            "http://www.afm-telethon.fr/"=>"AFM Téléthon",
                            "http://www.avh.asso.fr/"=>"Association Valentin Hauy",
                            "http://www.alliance-maladies-rares.org/"=>"Alliance Maladies rares",
                            "http://www.girgravure.com/"=>"Gir Gravure",
                            "http://terreplurielle.com/terreplurielle/"=>"Terre Plurielle",
                            "http://www.iscom.fr/"=>"Iscom",
                            "http://www.rclens.fr/"=>"Racing Club de Lens",
                            "http://www.fo-rothschild.fr/"=>"Fondation Ophtalmologique Adolphe de Rothschild",
                            "http://lievin.fr/"=>"Ville de Liévin",
                            "http://www.letouquet.com/"=>"Ville du touquet paris plage",
                            "http://www.saveursenor.com/"=>"Saveurs en Or",
                            "http://www.iut-lens.univ-artois.fr/"=>"IUT de Lens",
                            "http://www.francebleu.fr/station/france-bleu-nord"=>"France Bleu Nord",
                            "http://www.baumann-photo.net/"=>"Arnaud Baumann",
                            "http://www.delambre-cartoon.com/"=>"Jean-Michel Delambre",
                            "https://www.facebook.com/pages/Olivier-Gourmet/105998169430482"=>"Olivier Gourmet",
                            "http://www.fleuve-editions.fr/livres-romans/auteurs/franck-thilliez/"=>"Franck Thilliez",
                            "http://www.thomasfersen.fr/"=>"Thomas Fersen",
                            "http://www.steevenetchristopher.fr/"=>"Steeven et Christopher",
                            "http://www.gilbertmontagne.com/"=>"Gilbert Montagné",
                            "http://tresor-makunda.e-monsite.com/"=>"Trésor Makunda",
                            "http://judo-lorient-frebault.clubeo.com/dirigeants/gerald-rollo.html"=>"Gerald Rollo",
                            "https://en.wikipedia.org/wiki/Antoine_Perel"=>"Antoine Perel",
                            "http://www.jeremypoincenot.com/"=>"Jérémy Poincenot",
                            "http://www.fondation-groupama.com/"=>"Fondation Groupama",
                            "http://www.fondationorange.com/"=>"Fondation Orange",
                        ];
                    ?>
                <div class="col-xs-4">
                    <a href="<?php echo ${$p}[$a-1]; ?>"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/partenaires/<?php echo $p; ?>/<?php echo $NbTires[1]; ?>.jpg" class="img-responsive" alt="<?php echo $alt[${$p}[$a-1]]; ?>"/></a>
                </div>
                <div class="col-xs-4">
                    <a href="<?php echo ${$p}[$b-1]; ?>"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/partenaires/<?php echo $p; ?>/<?php echo $NbTires[2]; ?>.jpg" class="img-responsive" alt="<?php echo $alt[${$p}[$b-1]]; ?>"/></a>
                </div>
                <div class="col-xs-4">
                    <a href="<?php echo ${$p}[$c-1]; ?>"><img src="<?php echo get_template_directory_uri() ;?>/bootstrap/img/partenaires/<?php echo $p; ?>/<?php echo $NbTires[3]; ?>.jpg" class="img-responsive" alt="<?php echo $alt[${$p}[$c-1]]; ?>"/></a>
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
