<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Console;
use App\Models\VideoGame;
use Illuminate\Http\Request;

class VideoGameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        // $videogames = VideoGame::all();
        $videoGames = VideoGame::with('consoles',)->get();
        return view('videogames.index', compact('videoGames'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $genres = ['Azione', 'Avventura', 'GDR', 'Sparatutto', 'Sport', 'Corsa', 'Strategia', 'Horror', 'Platform', 'Puzzle', 'Indie', 'MMO', 'Battle Royale'];
        $consoles = Console::all();
        return view('videogames.create', compact('consoles', 'genres'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(VideoGame $videogame)
    {

        $consoles = $videogame->consoles;

        return view('videogames.show', compact('videogame', 'consoles'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
