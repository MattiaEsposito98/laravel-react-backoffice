<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        {{-- <a class="navbar-brand" href="#"><span class="badge text-bg-danger">Admin</span>
        </a> --}}
        <a class="navbar-brand" href="#"><img src="{{ asset('image/admin.jpg') }}" width="70" alt="admin"> </a>
        <div class="navbar-brand">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item ">
                    <a class="nav-link disabled" href="#">Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('login') }}">
                        <span class="badge fs-6 text-bg-dark">Login</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
