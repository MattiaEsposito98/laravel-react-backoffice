@extends('layouts.layout') <!-- Assicurati di avere un layout base -->

@section('content')
    <div class="container">
        <h1 class="mb-4">Lista Videogiochi</h1>

        <!-- Verifica se ci sono videogiochi -->
        @if ($videogames->isEmpty())
            <div class="alert alert-warning" role="alert">
                Nessun videogioco trovato.
            </div>
        @else
            <table class="table">
                <thead class="table-danger">
                    <tr>
                        <th>Titolo</th>
                        <th>Genere</th>
                        <th>Data di Uscita</th>
                        <th>Valutazione</th>
                        <th>Console</th>
                    </tr>
                </thead>
                <tbody class="table-light">
                    @foreach ($videogames as $videogame)
                        <tr>
                            <td>{{ $videogame->title }}</td>
                            <td>{{ $videogame->genre }}</td>
                            <td>{{ \Carbon\Carbon::parse($videogame->release_date)->format('d/m/Y') }}</td>
                            <td>{{ $videogame->rating ?? 'N/A' }}</td>
                            <td>
                                @if ($videogame->consoles->isEmpty())
                                    Nessuna console associata
                                @else
                                    <ul class="list-unstyled mb-0">
                                        @foreach ($videogame->consoles as $console)
                                            <li>{{ $console->name }}</li>
                                        @endforeach
                                    </ul>
                                @endif
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @endif
    </div>
@endsection
