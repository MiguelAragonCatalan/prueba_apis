<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model {
    protected $table = 'productos';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = ['nombre', 'sku', 'isDeleted', 'createdAt', 'deletedAt'];
    protected $hidden = ['isDeleted', 'deletedAt'];
}
