<?php

namespace Database\Seeders;

use App\Models\VideoGames;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class VideoGamesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Inizializza Faker
        $faker = Faker::create();

        for ($i = 0; $i < 5; $i++) { // Usa < 5 per generare 5 videogiochi
            $newVideoGame = new VideoGames();
            $newVideoGame->title = $faker->sentence(3);
            $newVideoGame->genre = $faker->randomElement(['Azione', 'Avventura', 'GDR', 'Sparatutto', 'Sport', 'Corsa', 'Strategia', 'Horror', 'Platform', 'Puzzle', 'Indie', 'MMO', 'Battle Royale']);
            $newVideoGame->release_date = $faker->date();
            $newVideoGame->description = $faker->paragraph();
            $newVideoGame->rating = $faker->randomFloat(1, 1, 10);
            $newVideoGame->save();
        }
    }
}
