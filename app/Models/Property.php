<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'address_id',
        'price',
        'description',
        'category',
        'isForRent',
        'status',
        'bedrooms',
        'bathrooms',
        'images'
    ];

    public function address()
    {
        return $this->belongsTo(Address::class);
    }
}
