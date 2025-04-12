<?php

use App\Http\Controllers\CourseController;
use App\Models\Course;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('student/dashboard');
    })->name('dashboard');

    Route::get('courses', [ CourseController::class, 'index' ])->name('dashboard');
    Route::get('profile', function () {
        return Inertia::render('student/profile');
    })->name('dashboard');
    Route::get('profile/edit', function() {
        return Inertia::render('student/profile/edit');
    });

    Route::get('courses/create', [ CourseController::class, 'create' ])->name('dashboard');
    Route::post('courses/create', [ CourseController::class, 'store' ])->name('dashboard');
    Route::get('courses/1/edit', [ CourseController::class, 'edit' ])->name('dashboard');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
