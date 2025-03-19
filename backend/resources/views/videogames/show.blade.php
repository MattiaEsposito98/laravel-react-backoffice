@extends('layouts.layout')

@section('content')
    <div class="card mb-3">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ $videogame->name }}</h5>
            <p class="card-text">{{ $videogame->description }}</p>
            <p class="card-text">{{ $videogame->genre }}</p>
            <p class="card-text"><small class="text-body-secondary">{{ $videogame->release_data }}</small></p>
            <div>
                <span>{{ $videogame->rating }}</span>
            </div>

        </div>
    </div>
@endsection
