<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\User;

class DeleteUser extends Component
{
	public User $user;

	public function delete()
    {
        $this->user->delete();
    }

    public function render()
    {
        return view('livewire.delete-user');
    }
}
