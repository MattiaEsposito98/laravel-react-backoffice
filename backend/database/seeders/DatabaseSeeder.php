<?php

namespace Database\Seeders;

use App\Models\Console;
use App\Models\User;
use App\Models\VideoGames;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $this->call([
            VideoGamesTableSeeder::class,
            ConsoleTableSeeder::class,
            ConsoleVideoGameTableSeeder::class,
        ]);
    }
}
