
const Login = () => {
  return (
    <div class="antialiased">
      <div class="flex flex-col items-center justify-center h-screen">
        <div class="w-full max-w-md bg-white rounded-lg ring-1 ring-gray-200 shadow-xl p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Login</h2>
          <form class="flex flex-col">
            <input type="email" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" />
            <input type="password" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />

            <label for="remember-me" class="text-sm text-gray-900 cursor-pointer">
              <input type="checkbox" id="remember-me" class="mr-2" />
              Remember me
            </label>
            <p class="text-gray-900 mt-4"> Don't have an account? <a href="./register" class="text-sm text-blue-500 -200 hover:underline mt-4">Sign Up</a></p>


            <button class="overflow-hidden relative w-full p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group mt-2" type='submit'>Login
              <span class="absolute w-full h-32 -top-8 -left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span class="absolute w-full h-32 -top-8 -left-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span class="absolute w-full h-32 -top-8 -left-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 z-10 block w-full" >Login!</span>
            </button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login