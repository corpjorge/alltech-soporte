<div>
    {{$user->name}}
</div>

 

<table class="table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2">Nombre</th>
      <th class="px-4 py-2">Rol</th>
      <th class="px-4 py-2">edit</th>
    </tr>
  </thead>
  <tbody>
  	@foreach ($users as $user)
        @include('includes.user', $user)
    @endforeach       
  </tbody>
</table>




<livewire:post-user/>

<div>
    {{ $message ?? '' }}
    <button wire:click="$set('message', 'Hello')">Say Hi</button>
</div>