<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'project';

    protected $fillable = ['nom','description','date','languages'];


    public $primarykey = 'id';

    public $timestamps = true;
}
