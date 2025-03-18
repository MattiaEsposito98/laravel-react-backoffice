<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">
            <img src="{{ asset('image/admin.jpg') }}" width="70" alt="admin">
        </a>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <a class="nav-link disabled border-rounded" href="#"><span
                        class="badge border fs-6 text-bg-light">Home</span>
                </a>
            </li>
            <li class="nav-item">
                @if (Auth::check())
                    <a class="nav-link" href="{{ route('profile.edit') }}">
                        <span class="badge fs-6 text-bg-dark">Profilo</span>
                    </a>
                @else
                    <a class="nav-link" href="{{ route('login') }}">
                        <span class="badge fs-6 text-bg-dark">Login</span>
                    </a>
                @endif
            </li>
        </ul>
    </div>
</nav>
