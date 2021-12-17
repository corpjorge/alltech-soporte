<?php

namespace App\Actions\Fortify;

use App\Models\User;
use App\Models\Workplace;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Illuminate\Validation\ValidationException;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();


        preg_match_all("/[\._a-zA-Z0-9-]+/i", $input['email'], $matches);

        $workplace =  Workplace::where('domain',$matches[0][1])->first();

        if (!$workplace){
            throw ValidationException::withMessages([
                'email' => ['No es posible realizar su registro.'],
            ]);
        }

        $user = new User;
        $user->fill([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);

        $user->role_id = 4;
        $user->workplace_id = $workplace->id;
        $user->save();

        return $user;
    }
}
