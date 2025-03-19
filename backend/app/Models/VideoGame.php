<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VideoGame extends Model
{
    public function consoles()
    {
        return $this->belongsToMany(Console::class, 'console_video_game', 'video_game_id', 'console_id');
    }
}
