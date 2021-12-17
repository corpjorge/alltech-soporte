<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function usersWorkplace($id)
    {
        return User::where('workplace_id',$id)->get();
    }

    public function usersWorkplaceTotal($id)
    {
        return User::where('workplace_id',$id)->count();
    }

    public function user($id)
    {
        return User::find($id);
    }

    public function create(Request $request, User $user)
    {
        $user->fill($request->all());
        $user->role_id = 4;
        $user->password = 'bbb';
        $user->save();
    }

    public function update(Request $request, User $user): void
    {
        $user->update($request->all());
    }

    public function userDevice($id): void
    {
        $user = User::find($id)->load('devices');

    }
}
