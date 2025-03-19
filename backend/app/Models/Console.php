<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Console extends Model
{
    public function videoGames()
    {
        return $this->belongsToMany(VideoGame::class, 'console_video_game', 'video_game_id', 'console_id');
    }
}
