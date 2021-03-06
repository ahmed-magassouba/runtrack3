<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Lien bootstarp 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <script rel="stylesheet" src="script.js"></script>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">LTPF</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="https://laplateforme.io/">Accueil</a>
                        <a class="nav-link" href="#">Units</a>
                        <a class="nav-link disabled" href="#">Jobs</a>
                        <a class="nav-link disabled">Skils</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <div class="container-fluid  secondary pb-4">
            <div class="row">
                <h1 class="text-center display-6">LaPlateforme_</h1>
            </div>
            <div class="row gx-5">
                <div class="col-3">
                    <div class="card">
                        <img src="12.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Un Papillon</h5>
                            <p class="card-text m-0">Un papillon, c'est un peu comme une chenille, mais avec des ailes.
                                <br>
                                Ne pas ingerer.
                            </p>

                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Commander votre propre <br>
                                papillon
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Confirmation d'achat</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
                                        </div>
                                        <div class="modal-body">
                                            Votre achat a bien ??t?? enregistrer
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-7 primary ">
                    <div id="jumbotron" class="jumbotron" m-5>
                        <h1 class="display-4">Bonjour, monde!</h1>
                        <p class="lead">Il existe plusieurs visions du terme:</p>
                        <p>le monde est la mati??re, l'espace et les ph??nom??nes qui nous sont accessibles par les sens, l'experience ou la raison.</p>
                        <p>Le sens le plus courant d??signe notre plan??te, la terre avec ses habitants, et son environnement plus ou moins naturel.</p>
                        <hr class="my-4">
                        <p id="jumbo">Le sens ??tendu d??signe l'univers dans son ensemble.</p>
                        <a href="#" id="btn1" class="btn btn-danger">Rebooter le monde</a>
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only"></span>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-end">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item" id="page1"><a class="page-link" href="#">1</a></li>
                                <li class="page-item" id="page2"><a class="page-link" href="#">2</a></li>
                                <li class="page-item" id="page3"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="col-2">

                    <ul id="ul" class="list-group fs-9">
                        <li class="list-group-item active" aria-current="true">Luxure</li>
                        <li class="list-group-item">Gourmandise</li>
                        <li class="list-group-item">Avarice</li>
                        <li class="list-group-item">Col??re</li>
                        <li class="list-group-item">Heresie</li>
                        <li class="list-group-item">Violence</li>
                        <li class="list-group-item">Ruse et Tromperie</li>
                        <li class="list-group-item">Trahison</li>
                        <li class="list-group-item">Internet Explorer</li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="row mt-4 ">
            <div class="col-10">
                <h6 class="text-end">Instalation de AI 9000</h6>
            </div>
        </div>

        <div class="row">
            <div class="offset-1 col-1 text-end">
                <svg id="plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left text-end" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z" />
                </svg>
            </div>
            <div class="col-8">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning active" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div class="col-1">
                <svg id="moins" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
                </svg>
            </div>
        </div>
        <div class="row m-4">
            <div class="offset-2 col-4">
                <h6>Recevez votre copie gratuite d'internet 2!</h6>
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">@</span>
                    <input type="text" class="form-control" placeholder="Login" aria-label="Username" aria-describedby="addon-wrapping">
                </div>
                <div class="input-group mt-4 mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                </div>
                <h6>URL des Internets 2 et 2.1 Beta</h6>
                <div class="input-group mb-3">
                    <span class="input-group-text">DogeCoin</span>
                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                    <span class="input-group-text">.00</span>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">https://l33t.lptf/dkwb/berlusconimkt/</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                </div>
            </div>
            <div class="offset-1 col-3">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    <p>we'll never share your email with anyone else.</p>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Check me out
                    </label>
                </div>
                <button class="btn btn-primary">Submit</button>
            </div>

        </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>