<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\VideoGamesController;
use App\Http\Controllers\ProfileController;
use App\Models\VideoGames;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layouts.layout');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::middleware(['auth', 'verified'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/', [DashboardController::class, 'index'])
            ->name('index');
    });

// CRUD
Route::resource('videogames', VideoGamesController::class)
    ->middleware(['auth', 'verified']);
