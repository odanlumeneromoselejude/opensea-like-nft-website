<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bid;
use App\Models\Nft;
use App\Models\User;
use Illuminate\Http\Request;

class BidController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $id = $request['id'];
        $status = $request['status'];
        $data = "";
        if ($status == "pending"){
            $data = Bid::where([
                ["nft_id", "=", $id],
                ["status", "=", "Pending"]
                ])
            ->limit(20)
            ->get();
        }else{
            $data = Bid::where("nft_id", "=", $id)
            ->limit(20)
            ->get();
        }
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
     * @param  \App\Models\Bid  $bid
     * @return \Illuminate\Http\Response
     */
    public function show(Bid $bid)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bid  $bid
     * @return \Illuminate\Http\Response
     */
    public function edit(Bid $bid)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bid  $bid
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request['id'];
        $status = $request['status'];
        $nft_id = $request['nft_id'];
        $user_id = $request['user_id'];
        $user = User::where("id", "=", $user_id)->first();
        $balance = number_format((float) $user->wallet_balance + $request['amount'], 2);
        Bid::where("nft_id", "=", $nft_id)->update(['status'=>"Rejected"]);
        Bid::where("id", "=", $id)->update(['status'=>$status, 'accepted'=>1]);
        if ($status == "Accepted"){
            Nft::where("id", "=", $nft_id)->update(['user_id'=>$user_id]);
            User::where("id", "=", $user_id)->update(['wallet_balance'=>$balance]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bid  $bid
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bid $bid)
    {
        //
    }

    public function place(Request $request){
        $address = $request['address'];
        $amount = $request['bid'];
        $id = $request['id'];

        $nft = Nft::where("id", "=", $id)->first();
        $bid = (int) $nft->bids + 1;

        Nft::where("id", "=", $id)->update(['bids'=>$bid]);

        $user = User::where("address", "=", $address)->first();
        $user_id = $user->id;

        $data = Bid::create([
            'user_id'=>$user_id,
            'nft_id'=>$id,
            'amount'=>$amount,
            'accepted'=>false,
            'status'=>"Pending"
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
}
