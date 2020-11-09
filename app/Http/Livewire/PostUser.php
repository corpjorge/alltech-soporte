<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\User;

class PostUser extends Component
{
	public $name;
    public $email;
    public $role_id;

    protected $rules = [
        'name' => 'required|min:6',
        'email' => 'required|email',
        'role_id' => 'required',
    ];

    public function submit()
    {
        $this->validate(); 

        User::create([
            'name' => $this->name,
            'email' => $this->email,
            'role_id' => $this->role_id,
            'password' => 'sdfsdf',
        ]);
    }
}
