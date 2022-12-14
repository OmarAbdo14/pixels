<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'gallery',
        'service_provider_id',
        'category_id',
        'car_model_id',
        'price',
        'city',
        'offer_percentage',
        'desc',
        'state',
        'rate',
    ];

    public function category() {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function carModel() {
        return $this->belongsTo(CarModel::class, 'car_model_id');
    }

    public function serviceProvider() {
        return $this->belongsTo(ServiceProvider::class, 'service_provider_id');
    }

    public function users() {
        return $this->belongsToMany(User::class, 'users', 'user_id');
    }

    public function usersOrSellerRates() {
        return $this->hasMany(UserProductRate::class, 'product_id');
    }
}
