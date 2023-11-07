<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Nft;
use App\Models\User;
use Illuminate\Http\Request;

class NftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $arr = array("Art", "Photography", "Gaming", "Sporting", "Horror", "Painting", "Pets", "Ape", "Abstract", "Contemporary");
        // $vol = array(1000, 5000, 10000, 200000, 3000, 10000, 70000, 55000, 100, 400);
        // for ($i = 1; $i <= 156; $i++){
        //     $random = rand(0, 9);
        //     $collection = $arr[$random];
        //     $volume = $vol[$random];
        //     $available = true;
        //     $bids = rand(0, 100);
        //     $floor = rand(1, 8);
        //     $image = "storage/uploads/nfts/".$i.".jpeg";
        //     Nft::create([
        //         'user_id'=>"1",
        //         'image'=>$image,
        //         'floor'=>$floor,
        //         'bids'=>$bids,
        //         'available'=>$available,
        //         'volume'=>$volume,
        //         'collection'=>$collection
        //     ]);
        // }
        $param = $request['id'];
        $data = Nft::where('id', $param)->get();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $collection = $request['collection'];
        $floor = $request['floor'];
        $address = $request['address'];
        $fileName = time() . '.' . $request->file->extension();
        $request->file->storeAs('public/uploads/nfts', $fileName);

        $user = User::where("address", "=", $address)->first();

        $data = Nft::create([
            'user_id'=>$user->id,
            'image'=>"storage/uploads/nfts/".$fileName,
            'floor'=>$floor,
            'bids'=>"0",
            'available'=>true,
            'volume'=>"0",
            'collection'=>$collection
        ]);
        $arr = array();
        if ($data){
            $arr['status'] = true;
            $arr['message'] = "Successful";
        }else{
            $arr['status'] = false;
            $arr['message'] = "Failed";
        }
        return response()->json(json_encode($arr));
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
     * @param  \App\Models\Nft  $nft
     * @return \Illuminate\Http\Response
     */
    public function show(Nft $nft)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Nft  $nft
     * @return \Illuminate\Http\Response
     */
    public function edit(Nft $nft)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Nft  $nft
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Nft $nft)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Nft  $nft
     * @return \Illuminate\Http\Response
     */
    public function destroy(Nft $nft)
    {
        //
    }
}
