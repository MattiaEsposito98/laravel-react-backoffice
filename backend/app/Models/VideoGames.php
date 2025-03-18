<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VideoGames extends Model
{
    public function console()
    {
        return $this->belongsToMany(Console::class);
    }
}
