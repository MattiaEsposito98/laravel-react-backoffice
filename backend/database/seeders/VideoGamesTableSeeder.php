<?php

namespace Database\Seeders;

use App\Models\VideoGame;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class VideoGamesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        for ($i = 0; $i < 10; $i++) { // Usa < 5 per generare 5 videogiochi
            $newVideoGame = new VideoGame();
            $newVideoGame->title = $faker->sentence(3);
            $newVideoGame->genre = $faker->randomElement(['Azione', 'Avventura', 'GDR', 'Sparatutto', 'Sport', 'Corsa', 'Strategia', 'Horror', 'Platform', 'Puzzle', 'Indie', 'MMO', 'Battle Royale']);
            $newVideoGame->release_date = $faker->date();
            $newVideoGame->description = $faker->text(1600);
            $newVideoGame->rating = $faker->randomFloat(1, 1, 10);
            $newVideoGame->image = 'https://picsum.photos/200/300';
            $newVideoGame->save();
        }
    }
}
