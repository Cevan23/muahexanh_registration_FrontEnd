import axios from "~/api/axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [Warning, setWarning] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function HandleSubmit(event) {
    event.preventDefault();

    if(formData.email.length == 0 && formData.password.length == 0){
      setWarning(<h2 className="text-sm font-bold text-white bg-red-600 mb-4 p-2 rounded">Please Enter Email And Password</h2>);
      return;
    }
    else if(formData.email.length == 0){
      setWarning(<h2 className="text-sm font-bold text-white bg-red-600 mb-4 p-2 rounded">Please Enter Email</h2>);
      return;
    }
    else if(formData.password.length == 0){
      setWarning(<h2 className="text-sm font-bold text-white bg-red-600 mb-4 p-2 rounded">Please Enter Password</h2>);
      return;
    }

    axios.post('http://localhost:8082/api/students/login', formData).then(res =>{
      console.log(res);
      console.log(res.data.message);
      window.location.replace("./");
    }).catch(res =>{
      setWarning(<h2 className="text-sm font-bold text-white bg-red-600 mb-4 p-2 rounded">{res.response.data}</h2>);
      console.log(res);
      console.log(res.response.data);
    })
  }

  function HandleChange(event) {
    const { value, type, name } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div className="antialiased">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg ring-1 ring-gray-200 shadow-xl p-6">
          {Warning}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
          <form className="flex flex-col" onSubmit={HandleSubmit}>
            <input type="email" name="email" onChange={HandleChange} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" />
            <input type="password" name="password" onChange={HandleChange} className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />

            <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
              <input type="checkbox" id="remember-me" className="mr-2" />
              Remember me
            </label>
            <p className="text-gray-900 mt-4"> Do not have an account? <a href="./register" className="text-sm text-blue-500 -200 hover:underline mt-4">Sign Up</a></p>


            <button className="overflow-hidden relative w-full p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group mt-2" type='submit'>Login
              <span className="absolute w-full h-32 -top-8 -left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-full h-32 -top-8 -left-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-full h-32 -top-8 -left-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 z-10 block w-full" >Login!</span>
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login