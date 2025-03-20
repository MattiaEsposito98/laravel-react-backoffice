@extends('layouts.layout')

@section('content')
    <div class="container">
        <div class="card m-1 shadow-lg border-0 overflow-hidden" style="max-width: 100%;">
            <article id="article-show">
                <img src="{{ Str::startsWith($videogame->image, 'uploads/') ? asset('storage/' . $videogame->image) : asset('image/placeholder.png') }}"
                    alt="Copertina del videogioco" class="card-img-top img-fluid object-fit-fill" style="height: 500px;">
                <span id="rating">{{ $videogame->rating ? $videogame->rating : 'N/A' }}</span>

                <div id="consoles">
                    @php
                        $consoleClasses = [
                            'Playstation 4' => 'btn-primary',
                            'Playstation 5' => 'btn-primary',
                            'Nintendo Switch' => 'btn-danger',
                            'Xbox series S' => 'btn-success',
                            'Xbox One' => 'btn-success',
                            'PC' => 'btn-dark',
                        ];
                    @endphp

                    @if ($videogame->consoles->isEmpty())
                        <span class="btn btn-secondary fw-bold">Nessuna console associata</span>
                    @else
                        @foreach ($videogame->consoles as $console)
                            @php
                                $class = $consoleClasses[$console->name] ?? 'btn-dark';
                            @endphp
                            <span class="btn {{ $class }} fw-bold">{{ $console->name }}</span>
                        @endforeach
                    @endif
                </div>

                {{-- Compoennte per i bottoni --}}
                <x-buttons :videogame="$videogame" />
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
