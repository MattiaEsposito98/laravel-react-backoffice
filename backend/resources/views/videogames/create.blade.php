@extends('layouts.layout')

@section('title', 'Aggiungi un gioco')

@section('content')
    <div class="container-sm  d-flex justify-content-center mt-5">
        <form action="{{ route('videogames.store') }}" method="post" class="border rounded border-dark p-4 m-2">
            @csrf
            <div class="d-flex flex-column mb-3">
                <label for="name" class="form-label">Inserisci il nome</label>
                <input type="text" name="title" id="name">
            </div>

            {{-- Descrizione --}}
            <div class="mb-3">
                <label for="description" class="form-label">Descrizione</label>
                <textarea type="text" class="form-control" id="description" name="description"> </textarea>
            </div>

            {{-- Generi --}}
            <div class="mb-3">
                <select name="genre" id="genre" class="form-select">
                    <option value="">Seleziona un genere</option>
                    @foreach ($genres as $genre)
                        <option value="{{ $genre }}">{{ $genre }}</option>
                    @endforeach
                </select>
            </div>

            {{-- Consoles --}}
            <div class="mb-3">
                <legend>Disponibile su:</legend>
                @foreach ($consoles as $console)
                    <input type="checkbox" name="consoles[]" id="{{ $console->id }}" value="{{ $console->id }}">
                    <label for="{{ $console->id }}" class="me-4">{{ $console->name }} </label>
                @endforeach
            </div>

            {{-- Data --}}
            <div class="mb-3">
                <label for="date" class="form-label">Data di rilascio </label>
                <input type="date" name="date" id="date" class="form-control" value="{{ old('date') }}"
                    required>
            </div>

            <div class="d-flex justify-content-center">
                <input type="submit" value="Salva" class="btn btn-outline-dark class="form-label"">
            </div>


        </form>
    </div>

@endsection
