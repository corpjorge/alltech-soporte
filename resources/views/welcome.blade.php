<html>
<head> 
	<link rel="stylesheet" type="text/css" href="/css/app.css">
    @livewireStyles
</head>
<body>

	<div class="p-8">
	  <div class="bg-white flex items-center rounded-full shadow-xl">
	    <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search">	    
	    <div class="p-4">
	      <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
	        icon
	      </button>
	      </div>
	    </div>
	  </div>
	</div>

	<div class="w-64 flex shadow-lg flex-col bg-cover bg-center justify-content bg-white p-6 rounded pt-8 pb-8">
	  <div class="text-center text-gray-500 mb-6">
	    <h2>SIGN UP
	    </h2>
	  </div>
	  <div>
	    <form>
	      <input class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-500 pb-1" type="text"
	             placeholder="Username"/>
	      <input class="bg-transparent border-b m-auto block border-gray-500 w-full mb-6 text-gray-500 pb-1" type="password"
	             placeholder="password"/>
	      <div class="flex mt-4">
	        <input type="checkbox" class="mr-2" name="agreement" value="agree">
	        <p class="text-grey">Accept the
	          <a href="#" class=" no-underline text-teal-500 hover:text-teal-400">Terms and Conditions
	          </a>
	        </p>
	      </div>
	      <input class="shadow-lg pt-3 pb-3 mt-6 w-full text-white bg-teal-500 hover:bg-teal-400 rounded-full "
	             type="submit" value="SIGN IN">
	    </form>
	  </div>
	  <div>
	    <p class="mt-4 text-gray-500 text-sm">Have an account? 
	      <button href="#"
	         class="no-underline text-teal-500 hover:text-teal-400">Log in
	      </button>
	    </p>
	  </div>
	</div>


    @livewireScripts
</body>
</html>