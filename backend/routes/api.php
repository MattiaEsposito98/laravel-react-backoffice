<?php

use App\Http\Controllers\Api\VideoGamesController;
use App\Models\VideoGame;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Chiamate API
Route::apiResource('videogames', VideoGamesController::class);

// Funzione search
Route::get('/search', [VideoGamesController::class, 'search']);
