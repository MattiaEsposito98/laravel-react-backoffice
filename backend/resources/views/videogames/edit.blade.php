@extends('layouts.layout')

@section('title', 'Modifica un gioco')

@section('content')
    <div class="container-sm  d-flex justify-content-center mt-5">
        <form action="{{ route('videogames.update', $videogame) }}" method="post" class="border rounded border-dark p-4 m-2"
            enctype="multipart/form-data">
            @csrf @method('PUT')
            <div class="d-flex flex-column mb-3">
                <label for="name" class="form-label">Inserisci il nome</label>
                <input type="text" name="title" id="name" value="{{ $videogame->title }}">
            </div>

            {{-- Generi --}}
            <div class="mb-3">
                <select name="genre" id="genre" class="form-select">
                    <option value="">{{ $videogame->genre }}</option>
                    @foreach ($genres as $genre)
                        <option value="{{ $genre }}">{{ $genre }}</option>
                    @endforeach
                </select>
            </div>

            {{-- Image --}}
            <section class="d-flex align-items-center">
                <div class="mb-3 d-flex flex-column">
                    <label for="image">Modifica immagine di copertina</label>
                    <input type="file" name="image" id="image">
                </div>
                <img class="w-25"
                    src="{{ $videogame->image ? asset('storage/' . $videogame->image) : asset('image/placeholder.png') }}"
                    alt="Copertina videogioco">
            </section>

            <script>
                document.addEventListener("DOMContentLoaded", function() {
                    const inputFile = document.getElementById("image");
                    const previewImage = document.querySelector("img.w-25");

                    inputFile.addEventListener("change", function(event) {
                        const file = event.target.files[0];

                        if (file) {
                            const reader = new FileReader();

                            reader.onload = function(e) {
                                previewImage.src = e.target.result; // Aggiorna l'immagine con l'anteprima
                            };

                            reader.readAsDataURL(file);
                        }
                    });
                });
            </script>



            {{-- Consoles --}}
            <div class="mb-3">
                <legend>Disponibile su:</legend>
                @foreach ($consoles as $console)
                    <input type="checkbox" name="consoles[]" id="{{ $console->id }}" value="{{ $console->id }}"
                        {{ $videogame->consoles->contains($console->id) ? 'checked' : '' }}>
                    <label for="{{ $console->id }}" class="me-4">{{ $console->name }}</label>
                @endforeach
            </div>

            {{-- Data --}}
            <div class="mb-3 w-25">
                <label for="release_date" class="form-label">Data di rilascio </label>
                <input type="date" name="release_date" id="release_date" class="form-control"
                    value="{{ $videogame->release_date }}" required>
            </div>

            {{-- Descrizione --}}
            <div class="mb-3">
                <label for="description" class="form-label">Descrizione</label>
                <textarea type="text" class="form-control" id="description" name="description">{{ $videogame->description }}  </textarea>
            </div>

            {{-- Rating --}}
            <div class="mb-3">
                <label for="ratingInput">Inserisci la valutazione</label>
                <input type="number"step="0.1" name="rating" id="ratingInput" min="0" max="10.0"
                    value="{{ $videogame->rating }}">
            </div>

            <div class="d-flex justify-content-center">
                <input type="submit" value="Salva" class="btn btn-dark">
            </div>


        </form>
    </div>

@endsection
