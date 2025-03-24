<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\VideoGame;
use Illuminate\Http\Request;

class VideoGamesController extends Controller
{
    public function index()
    {
        $videoGames = VideoGame::with('consoles')->get();
        return response()->json([
            "success" => "true",
            "data" => $videoGames
        ]);
    }

    public function show(VideoGame $videogame)
    {
        $videogame->load('consoles');

        return response()->json([
            "success" => "true",
            "data" => $videogame
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        $games = VideoGame::where('title', 'LIKE', "%{$query}%")->with('consoles')->get();

        return response()->json($games);
    }
}
