<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\User;

class ShowUsers extends Component
{

	public $user;

    public function render()
    {
        return view('livewire.show-users', [
            'users' => User::all(),
        ]);
    }

    public function mount(User $user)
    {
         
        $this->user = $user;
    }

}
