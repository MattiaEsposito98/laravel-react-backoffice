@extends('layouts.layout')

@section('content')
    {{-- @dd($consoles) --}}
    <div class="container">
        <div class="card m-1 shadow-lg border-0 overflow-hidden" style="max-width: 100%;">
            <article id="article-show">
                <img src="{{ asset('image/god.png') }}" class="card-img-top img-fluid object-fit-fill" style="height: 500px;"
                    alt="{{ $videogame->name }}">
                <span id="rating">{{ $videogame->rating ? $videogame->rating : 'N/A' }}</span>
                <div id="consoles">
                    @foreach ($consoles as $console)
                        @if ($console->name === 'Playstation 4' || $console->name === 'Playstation 5')
                            <span class="btn btn-primary fw-bold">{{ $console->name }}</span>
                        @elseif ($console->name === 'Nintendo Switch')
                            <span class="btn btn-danger fw-bold">{{ $console->name }}</span>
                        @elseif ($console->name === 'Xbox series S' || $console->name === 'Xbox One')
                            <span class="btn btn-success fw-bold">{{ $console->name }}</span>
                        @elseif ($console->name === 'PC')
                            <span class="btn btn-dark fw-bold">{{ $console->name }}</span>
                        @endif
                    @endforeach
                </div>
                <div id="buttons">
                    <a href="">
                        <button type="button" class="btn btn-danger">Elimina</button>
                    </a>
                    <a href="">
                        <button type="button" class="btn btn-warning">Modifica</button>
                    </a>
                </div>

            </article>

            <div class="card-body">
                <h5 class="card-title fw-bold">{{ $videogame->name }}</h5>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button " type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Descrizione:
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {{ $videogame->description }}
                            </div>
                        </div>
                    </div>
                </div>
                <p class="card-text"><strong>Genere:</strong> {{ $videogame->genre }}</p>
                <p class="card-text"><strong class="text-body-secondary">Data di rilascio:</strong>
                    {{ \Carbon\Carbon::parse($videogame->release_date)->format('d/m/Y') }}</p>
            </div>
        </div>
    </div>
@endsection
