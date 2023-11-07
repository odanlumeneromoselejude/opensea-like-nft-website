<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Collection;
use App\Models\Nft;
use Illuminate\Http\Request;
use App\Http\Requests;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function retrieve(Request $request){
        if ($request['type'] == "popular"){
            $data = Collection::orderBy('volume', 'desc')->limit(6)->get();
            return response()->json($data);
        }else if ($request['type'] == "bids"){
            $data = Collection::inRandomOrder()->limit(10)->get();
            return response()->json($data);
        }else if ($request['type'] == "trends"){
            $data = Collection::orderBy('bids', 'desc')->limit(6)->get();
            return response()->json($data);
        }else if ($request['type'] == "arts"){
            $data = Nft::orderBy('volume', 'desc')
            ->where('collection', 'Art')
            ->limit(7)
            ->get();
            return response()->json($data);
        }
    }

    public function get(){
        $data = Collection::get();
        return response()->json($data);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $param = $request['param'];
        $data = NFT::orderBy('volume', 'desc')
        ->where('collection', $param)
        ->limit(50)
        ->get();

        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function edit(Collection $collection)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Collection $collection)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function destroy(Collection $collection)
    {
        //
    }
}
