<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PropertyController;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/search', function () {
    return Inertia::render('Search');
})->name('search');

Route::get('/search', function () {
    return Inertia::render('Search');
})->name('search');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/property', [PropertyController::class, 'index'])->name('property.index');

Route::get('/manage', function () {     
    return Inertia::render('Dashboard'); 
})->name('manage');

Route::get('/manage/properties/register', [PropertyController::class, 'register'] )->name('property.register');

Route::post('/properties', [PropertyController::class, 'store'])->name('property.store');

Route::get('/manage/admins/register', function () {     
    return Inertia::render('RegisterAdmin'); 
})->name('registerAdmin');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';