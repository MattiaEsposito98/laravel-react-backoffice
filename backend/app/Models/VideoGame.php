<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VideoGame extends Model
{
    public function consoles()
    {
        return $this->belongsToMany(Console::class);
    }
}
