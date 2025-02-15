<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Productos;
use App\Http\Controllers\Error;

Route::get('productos', [Productos::class, 'index']);
Route::get('productos/{id}', [Productos::class, 'show']);
Route::get('productos/search/{sku}', [Productos::class, 'search']);
Route::post('productos', [Productos::class, 'store']);
Route::put('productos/{id}', [Productos::class, 'update']);
Route::delete('productos/{id}', [Productos::class, 'destroy']);

Route::fallback([Error::class, 'handleNotFound']);
