<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [\App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');

    Route::get('users', [\App\Http\Controllers\UserController::class, 'index'])->name('users.index');

    Route::resource('households', \App\Http\Controllers\HouseholdController::class);
    
    Route::prefix('households/{household}')->group(function () {
        Route::get('members/create', [\App\Http\Controllers\HouseholdMemberController::class, 'create'])->name('households.members.create');
        Route::post('members', [\App\Http\Controllers\HouseholdMemberController::class, 'store'])->name('households.members.store');
        Route::get('members/{member}/edit', [\App\Http\Controllers\HouseholdMemberController::class, 'edit'])->name('households.members.edit');
        Route::match(['put', 'patch'], 'members/{member}', [\App\Http\Controllers\HouseholdMemberController::class, 'update'])->name('households.members.update');
        Route::delete('members/{member}', [\App\Http\Controllers\HouseholdMemberController::class, 'destroy'])->name('households.members.destroy');
    });
});

require __DIR__.'/settings.php';
