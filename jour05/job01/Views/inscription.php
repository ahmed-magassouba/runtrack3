<?php require_once '../Controllers/InscriptionController.php';
require_once 'header.php'  ?>

<form action="" method="post">

    <label for="nom">Nom : </label>
    <input type="text" name="nom" id="nom">
    <p></p>

    <label for="prenom">Prenom : </label>
    <input type="text" name="prenom" id="prenom">
    <p></p>

    <label for="email">Email : </label>
    <input type="email" name="email" id="email">
    <p></p>

    <label for="password">Mot de passe : </label>
    <input type="password" name="password" id="password">
    <p></p>

    <label for="confirm">Confirmez le mot de passe : </label>
    <input type="password" name="confirm" id="confirm">
    <p></p>

    <input type="button" name="submit" value="M'inscrire">
</form>

<?php require_once 'footer.php'  ?>