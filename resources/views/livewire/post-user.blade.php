<form wire:submit.prevent="save">
    @foreach ($users as $index => $user)
        <div wire:key="post-field-{{ $user->id }}">
            <input type="text" wire:model="users.{{ $index }}.name">
            <textarea wire:model="users.{{ $index }}.role_id"></textarea>
        </div>
    @endforeach
    <button type="submit">Save</button>
    <button wire:click="addTodo(1, 2)">
    Add Todo
</button>
</form>