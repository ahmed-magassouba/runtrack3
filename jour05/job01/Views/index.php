<?php require_once '../Controllers/IndexController.php';
require_once 'header.php'
?>


<!-- si l'utilisateur est connecté -->
<?php if (isset($_SESSION['utilisateur']) && !empty($_SESSION['utilisateur']['id'])) : ?>
    <p>Bonjour <?= $_SESSION['utilisateur']['prenom'] ?></p>
    <a href="deconnexion.php">Deconnexion</a>
<?php else : ?>
    <a href="inscription.php">Incription</a>
    <a href="connexion.php">Connexion</a>
<?php endif ?>


<!-- “inscription.php” et une page “connexion.php”. Ces deux pages permettent
aux utilisateurs de créer un compte et de se connecter. L’ensemble des
vérifications habituelles doivent se faire sans rafraîchissement de la page.
(Prénom/Nom renseignés, mots de passe identiques et suffisamment
complexes, adresse email déjà prise, au bon format...) Un message lié à
chaque erreur doit être affiché en dessous du formulaire le cas échéant.
Lorsqu’une inscription est validée, l’utilisateur est renvoyé sur la page de
connexion. Lorsqu’il se connecte, il est renvoyé vers la page d’accueil. -->
<?php require_once 'footer.php'  ?>