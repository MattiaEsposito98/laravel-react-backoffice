<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title', 'Backoffice')</title>
    @vite(['resources/js/app.js'])

</head>

<body class="bg-secondary-subtle d-flex flex-column min-vh-100">

    {{-- Navbar --}}
    <header>
        @include('partials.navbar')
    </header>

    {{-- Main --}}
    <main class="container-fluid flex-grow-1">
        @if (Auth::check())
            @yield('content')
        @else
            <div class=" mt-5 d-flex flex-column gap-2 justify-content-center align-items-center ">
                <h1>Effettua il login per accedere alla dashboard</h1>
                <a href="{{ route('login') }}">
                    <button type="button" class="btn btn-primary">Login</button>
                </a>
            </div>
        @endif

    </main>

    {{-- Footer --}}
    <footer>
        @include('partials.footer')
    </footer>

</body>

</html>
