<?php

namespace Database\Seeders;

use App\Models\Console;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class ConsoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(Faker $faker): void
    {
        $consoles = ['Playstation 5', 'Playstation 4', 'Xbox One', 'Xbox series S', 'Nintendo Switch', 'PC'];

        foreach ($consoles as $console) {
            $newConsole = new Console();
            $newConsole->name = $console;
            $newConsole->save();
        }
    }
}
