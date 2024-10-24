<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|

Fix (['prefix' => env('SPA_PREFIX')]
php artisan optimize:clear
php artisan route:clear
php artisan config:clear

*/

Route::get('/', function () {
    return view('welcome');
});


Route::group(['prefix' => env('SPA_PREFIX')], function () {
    Route::get('{any?}', fn () => view('app'))->where('any','.*');
});
