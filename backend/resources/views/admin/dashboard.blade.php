@extends('layouts.layout')

@section('title', 'Dashboard')

@section('content')
    <div class="container">
        <h1>Dashboard Amministratore</h1>
        <p>Id dell'admin: {{ $user->id }}</p>
        <p>Nome: {{ $user->name }}</p>
        <p>Email: {{ $user->email }}</p>
    </div>
@endsection
