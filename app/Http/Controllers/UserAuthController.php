<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequests\LoginRequest;
use App\Http\Requests\AuthRequests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;

class UserAuthController extends Controller
{

    public function register(RegisterRequest $request){
        $registerUserData = $request->validated();

        $user = User::create([
            'name' => $registerUserData['name'],
            'email' => $registerUserData['email'],
            'password' => Hash::make($registerUserData['password']),
        ]);

        return response()->json([
            'message' => 'User Created ',
        ]);
    }


    public function login(LoginRequest $request){
        $loginUserData = $request->validated();
        $user = User::where('email',$loginUserData['email'])->first();

        if(!$user || !Hash::check($loginUserData['password'],$user->password)){
            return response()->json([
                'message' => 'Invalid Credentials'
            ],401);
        }

        $user->tokens()->delete();
        $token = $user->createToken($user->name.'-AuthToken',['*'], now()->addMinutes(2))->plainTextToken;

        return response()->json([
            'access_token' => $token,
        ]);
    }


    public function logout(){
        auth()->user()->tokens()->delete();

        return response()->json([
            "message"=>"logged out"
        ]);
    }
}
