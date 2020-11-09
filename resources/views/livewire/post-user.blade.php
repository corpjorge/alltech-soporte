 <div class="w-64 flex shadow-lg flex-col bg-cover bg-center justify-content bg-white p-6 rounded pt-8 pb-8">	  
	  <div>
	    <form wire:submit.prevent="submit">
	      <input wire:model="name" class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-500 pb-1" type="text"
	             placeholder="name"/>
	              @error('name') <span class="error">{{ $message }}</span> @enderror
	      <input wire:model="email" class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-500 pb-1" type="email"
	             placeholder="email"/>
	              @error('email') <span class="error">{{ $message }}</span> @enderror
          <input wire:model="role_id" class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-500 pb-1" type="number"
         placeholder="role_id"/>
          @error('role_id') <span class="error">{{ $message }}</span> @enderror	      
	      <input class="shadow-lg pt-3 pb-3 mt-6 w-full text-white bg-teal-500 hover:bg-teal-400 rounded-full "
	             type="submit" value="SIGN IN">
	    </form>
	  </div>	  
	</div>