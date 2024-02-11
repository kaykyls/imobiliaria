<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ManagePropertyController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\RegisteredUserController;

Route::get('/', [ManagePropertyController::class, 'index'])->name('index');

Route::get('/properties/{property}', [ManagePropertyController::class, 'show'])->name('manageProperty.show');

Route::get('/search', [ManagePropertyController::class, 'search'])->name('search');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/property', [PropertyController::class, 'index'])->name('property.index');

Route::post('/contact', ContactController::class)->name('contact');

Route::middleware(['auth'])->group(function () {
    Route::get('/manage/admins', [AdminController::class, 'index'])->name('admins');
    Route::get('manage/admins/register', [RegisteredUserController::class, 'create']);
    Route::get('/manage/admins/{admin}', [AdminController::class, 'show'])->name('admins.show');
    Route::delete('/manage/admins/{admin}', [AdminController::class, 'destroy'])->name('admins.destroy');

    Route::get('/manage', function () {     
        return Inertia::render('Dashboard'); 
    })->name('manage');

    Route::get('/manage/properties/register', [ManagePropertyController::class, 'register'])->name('manageProperty.register');
    Route::post('/manage/properties', [ManagePropertyController::class, 'store'])->name('manageProperty.store');
    Route::get('/manage/properties', [ManagePropertyController::class, 'indexAdmin'])->name('manageProperty.index');
    Route::get('/manage/properties/{property}', [ManagePropertyController::class, 'showAdmin'])->name('manageProperty.showAdmin');
    Route::delete('/manage/properties/{property}', [ManagePropertyController::class, 'destroy'])->name('manageProperty.destroy');
    Route::get('/manage/properties/{property}/edit', [ManagePropertyController::class, 'edit'])->name('manageProperty.edit');
    Route::put('/manage/properties/{property}', [ManagePropertyController::class, 'update'])->name('manageProperty.update');
});

Route::middleware('auth')->group(function () {
    Route::get('/manage/admins/{admin}/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';