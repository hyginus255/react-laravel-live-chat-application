<?php

namespace App\Http\Controllers;
use GetStream\StreamChat\Client;

use Illuminate\Http\Request;

class ChatMessagesController extends Controller
{
    protected $client;

    public function __construct(){
        $this->client =  new Client(
            getenv("MIX_STREAM_API_KEY"), 
            getenv("MIX_STREAM_API_SECRET"),
        );
    }

    public function generateToken(Request $request){
        return response()->json([
            'token' => $this->client->createToken($request->name)
        ], 200);
    }
}
