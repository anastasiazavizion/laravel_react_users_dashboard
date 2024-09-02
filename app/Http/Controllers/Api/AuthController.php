<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        $user = User::create($data);
        $token = $user->createToken('main')->plainTextToken;
        return response()->json(compact(['user', 'token']));
    }

    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        if(!Auth::attempt($data)){
            return response()->json(['message'=>'Email or password is incorrect'], 401);
        }else{
            $user = Auth::user();
            $token = $user->createToken('main')->plainTextToken;
            return response()->json(compact(['user', 'token']));
        }
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        $user->currentAccessToken()->delete();
        return response()->json('', 204);
    }
}
