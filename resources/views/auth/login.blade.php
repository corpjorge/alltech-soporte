<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon.png">
    <link rel="icon" type="image/png" href="/img/favicon.png">
    <title>
        Fycls Ingeniería
    </title>
    <!--     Fonts and icons     -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
    <!-- Nucleo Icons -->
    <link href="/css/nucleo-icons.css" rel="stylesheet" />
    <link href="/css/nucleo-svg.css" rel="stylesheet" />
    <!-- Font Awesome Icons -->
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
    <link href="/css/nucleo-svg.css" rel="stylesheet" />
    <!-- CSS Files -->
    <link id="pagestyle" href="/css/soft-ui-dashboard.css?v=1.0.1" rel="stylesheet" />
</head>

<body class="g-sidenav-show  bg-white">
<div class="container position-sticky z-index-sticky top-0">
    <div class="row">
        <div class="col-12">
            <nav class="navbar navbar-expand-lg  blur blur-rounded top-0  z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                <div class="container-fluid">
                    <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3 " >
                        FYCLS Ingenieria
                    </a>
                    <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon mt-2">
                        <span class="navbar-toggler-bar bar1"></span>
                        <span class="navbar-toggler-bar bar2"></span>
                        <span class="navbar-toggler-bar bar3"></span>
                      </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navigation">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center me-2 active" aria-current="page" href="https://fyclsingenieria.com/" target="_blank">
                                    <i class="fa fa-globe opacity-6 text-dark me-1"></i>
                                    Sitio Web
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-2" href="https://fyclsingenieria.com/soporte/contactos" target="_blank">
                                    <i class="fa fa-whatsapp opacity-6 text-dark me-1"></i>
                                    Contactos
                                </a>
                            </li>
                        </ul>
                        <ul class="navbar-nav d-lg-block d-none">
                            <li class="nav-item">
                                <a href="https://fyclsingenieria.com/descargas" class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark" target="_blank">Descargas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- End Navbar -->
        </div>
    </div>
</div>
<section>
    <div class="page-header section-height-75">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                    <div class="card card-plain mt-8">
                        <div class="card-header pb-0 text-left bg-transparent">
                            <h3 class="font-weight-bolder text-info text-gradient">Bienvenidos</h3>
                            <p class="mb-0">Ingresa tu correo electrónico y contraseña para iniciar sesión</p>
                        </div>
                        <div class="card-body">
                            @if (session('status'))
                                <div class="alert alert-info" role="alert" style="color: white">
                                    {{ session('status') }}
                                </div>
                            @endif
                            <form action="{{ route('login') }}" role="form text-left" method="post" autocomplete="off">
                                @csrf
                                <label>Email</label>
                                <div class="mb-3">
                                    <input name="email" type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon">
                                    @if ($errors->has('email'))
                                        <span id="{{ 'email' }}-error" class="error text-danger" for="input-{{ 'email' }}" style="display: block;">{{ $errors->first('email') }}</span>
                                    @endif
                                </div>
                                <label>Password</label>
                                <div class="mb-3">
                                    <input name="password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon">
                                    @if ($errors->has('password'))
                                        <span id="{{ 'password' }}-error" class="error text-danger" for="input-{{ 'password' }}" style="display: block;">{{ $errors->first('password') }}</span>
                                    @endif
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="rememberMe" checked="">
                                    <label class="form-check-label" for="rememberMe">Recuérdame</label>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn bg-gradient-info w-100 mt-4 mb-0">Entrar</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer text-center pt-0 px-lg-2 px-1">
                            <p class="mb-4 text-sm mx-auto">
                                ¿No tienes una cuenta?
                                <a href=" {{ route('register') }}" class="text-info text-gradient font-weight-bold">Registrarse</a>
                            </p>
                            <p class="mb-4 text-sm mx-auto">
                                ¿Olvidas te tu contraseña?
                                <a href=" {{ url('/forgot-password') }}" class="text-info text-gradient font-weight-bold">Solicitar</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                        <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image:url('/img/curved-images/curved6.jpg')"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--   Core JS Files   -->
<script src="/js/core/popper.min.js"></script>
<script src="/js/core/bootstrap.min.js"></script>
<script src="/js/plugins/smooth-scrollbar.min.js"></script>
<!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->
<script src="/js/soft-ui-dashboard.js?v=1.0.1"></script>
<script>
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
        var options = {
            damping: '0.5'
        }
        Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
</script>
<!-- Github buttons -->
<script async defer src="https://buttons.github.io/buttons.js"></script>
</body>

</html>
