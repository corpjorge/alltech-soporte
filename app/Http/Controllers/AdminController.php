<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function agents()
    {
        return User::where('workplace_id',1)->get();
    }
}
