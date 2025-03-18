@extends('layouts.layout')

@section('content')
    <div class="container">
        <h1>Dashboard Amministratore</h1>
        <p>Id dell'utente: {{ $user->id }}</p>
        <p>Nome: {{ $user->name }}</p>
        <p>Email: {{ $user->email }}</p>
        <!-- Aggiungi altre informazioni utili qui -->
    </div>
@endsection
