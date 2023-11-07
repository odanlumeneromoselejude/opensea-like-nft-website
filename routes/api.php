<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/collections', 'App\Http\Controllers\Api\CollectionController@retrieve');
Route::get('/collections', 'App\Http\Controllers\Api\CollectionController@get');
Route::post('/collection', 'App\Http\Controllers\Api\CollectionController@show');
Route::post('/nft', 'App\Http\Controllers\Api\NftController@index');
Route::post('/nft/create', 'App\Http\Controllers\Api\NftController@create');

Route::post("/user", "App\Http\Controllers\Api\UserController@create");

Route::get("/mywallet", "App\Http\Controllers\Api\UserController@index");

Route::get("/nfts", "App\Http\Controllers\Api\NftsController@index");

Route::get("/bids/retrieve", "App\Http\Controllers\Api\BidController@index");
Route::post("bids/place", "App\Http\Controllers\Api\BidController@place");
Route::post("/bids/update", "App\Http\Controllers\Api\BidController@update");

Route::get('/search', 'App\Http\Controllers\Api\SearchController@index');

//Route::get('/nfts', 'App\Http\Controllers\Api\NftController@index');