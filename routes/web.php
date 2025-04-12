<?php

use App\Http\Controllers\CourseController;
use App\Models\Course;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // this is the main dashboard this cannot be used for the admin
    Route::get('dashboard', function () {
        return Inertia::render('student/dashboard');
    })->name('dashboard');

    Route::get('courses', [ CourseController::class, 'index' ])->name('dashboard');
    Route::get('courses/{id}', [ CourseController::class, 'show' ])->name('dashboard');

    Route::get('students', function () {
        return Inertia::render('student/all');
    })->name('students');

    Route::get('course/quiz', function () {
        return Inertia::render('course/quiz/page');
    })->name('students');

    Route::get('student/profile', function () {
        return Inertia::render('student/profile');
    })->name('profile');

    Route::get('student/profile/edit', function () {
        return Inertia::render('student/profile/edit');
    })->name('profile');

    Route::get('teacher/dashboard', function () {
        return Inertia::render('teacher/dashboard');
    })->name('dashboard');


    Route::get('course/{id}/edit', function () {
        return Inertia::render('course/edit');
    })->name('dashboard');


    Route::get('lesson', function () {
        return Inertia::render('course/lesson/lesson');
    })->name('profile');

    Route::get('editor', function () {
        return Inertia::render('course/lesson/editor');
    })->name('profile');

    Route::get('teacher/course/create', function () {
        return Inertia::render('course/create');
    })->name('profile');

    Route::get('teacher/course', function () {
        return Inertia::render('course/index');
    })->name('profile');

    Route::get('admin/dashboard', function () {
        return Inertia::render('student/dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
