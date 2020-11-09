<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\User;

class PostUser extends Component
{
	public $users;

    protected $rules = [
        'users.*.name' => 'required|',
        
    ];

    public function mount()
    {         
        $this->users = User::all();
    }

    public function save()
    {
        $this->validate();

        foreach ($this->users as $user) {
            $user->save();
        }
    }

    public function addTodo($id, $name)
    {       
        return response()->json([
            'name' => 'Abigail',
            'state' => 'CA',
        ]);
    }

    public function render()
    {
        return view('livewire.post-user');
    }
}
