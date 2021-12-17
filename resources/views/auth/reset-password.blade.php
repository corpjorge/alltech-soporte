<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon.png">
    <link rel="icon" type="image/png" href="/img/favicon.png">
    <title>
        FYCLS Ingeniería
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

<body class="g-sidenav-show  bg-gray-100">
<!-- Navbar -->
<nav class="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3  navbar-transparent mt-4">
    <div class="container">
        <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white">
            FYCLS Ingeniería
        </a>
        <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
        </button>
        <div class="collapse navbar-collapse" id="navigation" >
            <ul class="navbar-nav mx-auto" >
                <li class="nav-item">
                    <a style="color: whitesmoke" style="color: whitesmoke" class="nav-link d-flex align-items-center me-2 active" aria-current="page" href="https://fyclsingenieria.com/" target="_blank">
                        <i style="color: whitesmoke" class="fa fa-globe opacity-6 me-1"></i>
                        Sitio Web
                    </a>
                </li>
                <li class="nav-item">
                    <a style="color: whitesmoke" class="nav-link me-2" href="https://fyclsingenieria.com/soporte/contactos" target="_blank">
                        <i class="fa fa-whatsapp opacity-6 me-1"></i>
                        Contactos
                    </a>
                </li>
                <li class="nav-item">
                    <a style="color: whitesmoke" class="nav-link me-2" href="{{ route('login') }}">
                        <i class="fa fa-user opacity-6  me-1"></i>
                        Login
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav d-lg-block d-none">
                <li style="color: whitesmoke" class="nav-item">
                    <a href="https://fyclsingenieria.com/descargas" class="btn btn-sm btn-round mb-0 me-1 bg-gradient-light">Descargas</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- End Navbar -->
<section class="h-100-vh mb-0">
    <div class="page-header align-items-start section-height-50 pt-5 pb-11 m-3 border-radius-lg" style="background-image: url('/img/curved-images/curved14.jpg');">

    </div>
    <div class="container">
        <div class="row mt-lg-n10 mt-md-n11 mt-n10">
            <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
                <div class="card z-index-0">
                    <div class="card-header text-center pt-4">
                        <h5>Recuperar contraseña</h5>
                    </div>
                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-info" role="alert" style="color: white">
                                {{ session('status') }}
                            </div>
                        @endif

                        @if ($errors->any())
                            <div class="alert alert-danger" role="alert" style="color: white">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                        <form role="form text-left" method="post" action="{{ url('/reset-password') }}" autocomplete="off">
                            @csrf
                            <input type="hidden" value="{{ request()->route('token') }}" name="token" >
                            <div class="mb-3">
                                <input name="email" type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" value="{{ old('email') }}">
                                @if ($errors->has('email'))
                                    <span id="{{ 'email' }}-error" class="error text-danger" for="input-{{ 'email' }}" style="display: block;">{{ $errors->first('email') }}</span>
                                @endif
                            </div>
                            <div class="mb-3">
                                <input name="password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon">
                                @if ($errors->has('password'))
                                    <span id="{{ 'password' }}-error" class="error text-danger" for="input-{{ 'password' }}" style="display: block;">{{ $errors->first('password') }}</span>
                                @endif
                            </div>
                            <div class="mb-3">
                                <input name="password_confirmation" type="password" class="form-control" placeholder="Confirmar password" aria-label="Password" aria-describedby="password-addon">
                                @if ($errors->has('password_confirmation '))
                                    <span id="{{ 'password_confirmation ' }}-error" class="error text-danger" for="input-{{ 'password_confirmation ' }}" style="display: block;">{{ $errors->first('password_confirmation ') }}</span>
                                @endif
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn bg-gradient-dark w-100 my-2 mb-2">Solicitar</button>
                            </div>
                            <p class="text-sm mt-3 mb-0">¿No tienes una cuenta?: <a href="{{ route('register') }}" class="text-dark font-weight-bolder">Registrarse</a></p>
                        </form>
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
