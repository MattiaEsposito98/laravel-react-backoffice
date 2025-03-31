@extends('layouts.layout')

@section('title', 'Homepage')

@section('content')
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <h1 class="mb-4">Lista Videogiochi</h1>
            <a href="{{ route('videogames.create') }}" class="button-dark">
                Aggiungi un videogioco
            </a>

        </div>


        @if ($videoGames->isEmpty())
            <div class="alert alert-warning" role="alert">
                Nessun videogioco trovato.
            </div>
        @else
            <table class="table table-striped table-hover table-bordered text-center align-middle">
                <thead class="table-danger">
                    <tr>
                        <th>Titolo</th>
                        <th>Genere</th>
                        <th>Data di Uscita</th>
                        <th>Valutazione</th>
                        <th>Console</th>
                        <th>Modifica</th>
                    </tr>
                </thead>
                <tbody class="table-light">
                    @foreach ($videoGames as $videoGame)
                        <tr>
                            <td>{{ $videoGame->title }}</td>
                            <td>{{ $videoGame->genre }}</td>
                            <td>{{ \Carbon\Carbon::parse($videoGame->release_date)->format('d/m/Y') }}</td>
                            {{-- Carbon libreria di PHP che formatta e aiuta a formattare le date con il metodo parse() --}}
                            <td>{{ $videoGame->rating ?? 'N/A' }}</td>
                            <td>
                                @if ($videoGame->consoles->isEmpty())
                                    Nessuna console associata
                                @else
                                    <ul class="list-unstyled mb-0">
                                        @foreach ($videoGame->consoles as $console)
                                            <li>{{ $console->name }}</li>
                                        @endforeach
                                    </ul>
                                @endif
                            </td>
                            <td><a href="{{ route('videogames.show', $videoGame->id) }}">
                                    <button type="button" class="btn btn-outline-secondary">Visualizza</button>
                                </a></td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @endif
    </div>
@endsection
