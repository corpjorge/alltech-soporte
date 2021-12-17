<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DeviceController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PublicationController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WorkplaceController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {  return view('welcome'); });

Route::get('/service', [ServiceController::class, 'index']);
Route::post('/service', [ServiceController::class, 'create']);
Route::get('/service/{service}/edit', [ServiceController::class, 'edit']);
Route::put('/service/{service}', [ServiceController::class, 'update']);
Route::put('/service/qualify/{service}', [ServiceController::class, 'qualify']);

Route::get('/workplaces', [WorkplaceController::class, 'workplaceList']);
Route::get('workplace/{id}/users', [UserController::class, 'usersWorkplace']);

Route::get('/agents', [AdminController::class, 'agents']);

Route::post('/user', [UserController::class, 'create']);




Route::group(['middleware' => 'auth'], function () {

    Route::get('/me', [AuthController::class, 'user']);

//    Route::get('/workplaces', [WorkplaceController::class, 'workplaceList']);
    Route::get('/workplace/{id}', [WorkplaceController::class, 'workplace']);
    Route::get('/products', [WorkplaceController::class, 'productsWorkplace']);

    Route::get('/user/{id}', [UserController::class, 'user']);
    Route::put('/user/{user}', [UserController::class, 'update']);
    Route::get('/user/{user}/device', [UserController::class, 'userDevice']);

    Route::get('workplace/{id}/devices', [DeviceController::class, 'DevicesWorkplace']);
    Route::get('workplace/{id}/products', [ProductController::class, 'productsWorkplace']);
//    Route::get('workplace/{id}/users', [UserController::class, 'usersWorkplace']);

    Route::get('workplace/{id}/devices/total', [DeviceController::class, 'devicesWorkplaceTotal']);
    Route::get('workplace/{id}/products/total', [ProductController::class, 'productsWorkplaceTotal']);
    Route::get('workplace/{id}/users/total', [UserController::class, 'usersWorkplaceTotal']);

    Route::get('publications', [PublicationController::class, 'list']);
    Route::post('publications/create', [PublicationController::class, 'create']);
    Route::get('publication/{id}', [PublicationController::class, 'publication']);
    Route::post('publication/{id}', [PublicationController::class, 'update']);

    Route::get('/home', function () {  return view('home');  })->middleware(['verified']);
});
