
const Login = () => {
  return (
    <div class="antialiased dark:bg-dimBlack">
      <div class="flex flex-col items-center justify-center h-screen">
        <div class="w-full max-w-md bg-white rounded-lg ring-1 ring-gray-200 shadow-xl p-6 dark:bg-gray-800">
          <h2 class="text-2xl font-bold text-gray-900 mb-4 dark:text-gray-200">Login</h2>
          <form class="flex flex-col">
            <input type="email" class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 dark:focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" />
            <input type="password" class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 dark:focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />
            <div class="flex items-center justify-between flex-wrap">
              <label for="remember-me" class="text-sm text-gray-900 dark:text-gray-200 cursor-pointer">
                <input type="checkbox" id="remember-me" class="mr-2" />
                Remember me
              </label>
              <a href="#" class="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
              <p class="text-gray-900 mt-4 dark:text-white"> Don't have an account? <a href="#" class="text-sm text-blue-500 -200 hover:underline mt-4">Signup</a></p>
            </div>
            <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login