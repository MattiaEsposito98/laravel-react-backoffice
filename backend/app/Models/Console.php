<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Console extends Model
{
    public function videoGames()
    {
        return $this->belongsToMany(VideoGame::class);
    }
}
