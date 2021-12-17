<?php

namespace App\Http\Controllers;

class AuthController extends Controller
{
    public function user(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'type' => auth()->user()->role_id,
            'workplace_id' => auth()->user()->workplace_id,
            'name' => auth()->user()->name,
            'zone' => auth()->user()->zone,
            'area' => auth()->user()->area
        ]);
    }
}
