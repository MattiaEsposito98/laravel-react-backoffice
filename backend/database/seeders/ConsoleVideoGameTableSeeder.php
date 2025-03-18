<?php

namespace Database\Seeders;

use App\Models\Console;
use App\Models\VideoGames;
use Illuminate\Database\Seeder;

class ConsoleVideoGameTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $consoles = Console::all();
        $videoGames = VideoGames::all();

        foreach ($videoGames as $videoGame) {

            $randomConsoles = $consoles->random(rand(1, 3)); // Associa a 1-3 console

            foreach ($randomConsoles as $console) {
                $videoGame->consoles()->attach($console->id);
            }
        }
    }
}
