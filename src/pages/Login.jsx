import axios from "~/api/axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Context from "~/store/Context";

const Login = () => {
  const [Warning, setWarning] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigator = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["userCookie"]);
  const context = useContext(Context);

  function HandleSubmit(event) {
    event.preventDefault();

    //Pre-processing UI elements
    if (formData.email.length == 0 && formData.password.length == 0) {
      setWarning(
        <h2 className="text-sm font-bold text-white bg-red-600 mb-4 p-2 rounded">
          Please Enter Email And Password
        </h2>
      );
      return;
    } else if (formData.email.length == 0) {
      setWarning(
        <h2 className="text-sm font-bold text-white bg-red-600 mb-4 p-2 rounded">
          Please Enter Email
        </h2>
      );
      return;
    } else if (formData.password.length == 0) {
      setWarning(
        <h2 className="text-sm font-bold text-white bg-red-600 mb-4 p-2 rounded">
          Please Enter Password
        </h2>
      );
      return;
    }

    axios
      .post(`http://localhost:8082/api/login`, formData)
      .then((res) => {
        // Login with role of community leader
        setCookie("userCookie", JSON.stringify(res.data.data));
        context.setLoginState({
          isLoggedIn: true,
          role: res.data.data.role.toLowerCase(),
          loginData: { ...res.data.data },
        });

        // Redirect to community leader page
        if (formData.role.toLowerCase() === "communityleader")
          navigator("/community-leader");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function HandleChange(event) {
    const { value, name } = event.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div className="antialiased">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg ring-1 ring-gray-200 shadow-xl p-6">
          {Warning}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
          <form className="flex flex-col" onSubmit={HandleSubmit}>
            {/* Roles */}
            <div className="flex justify-center overflow-hidden mb-4">
              <div className="radio-inputs">
                <label>
                  <input
                    className="radio-input"
                    type="radio"
                    value="student"
                    name="role"
                    onChange={HandleChange}
                  />
                  <span className="radio-tile">
                    <span className="radio-icon">
                      <svg
                        className="svg-icon"
                        width="1040px"
                        viewBox="0 0 1040 800"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        style={{ width: 80, height: 35 }}
                      >
                        <path d="M672 576M640 576M879.994667 355.316267l-340.405333-125.1232c-21.2192-8.2112-16.766933-8.263467-37.816533-0.119467L159.316267 354.192c-21.048533 8.144-20.912 21.402667 0.308267 29.6128l81.374933 29.508267c-36.0352 37.330133-38.3712 76.1408-38.855467 121.143467-13.9264 5.736533-23.812267 20.168533-23.812267 37.0784 0 15.5264 8.337067 28.964267 20.481067 35.501867-5.771733 45.722667-22.289067 97.960533-70.8128 159.851733 24.004267 19.866667 36.3936 26.488533 54.977067 33.111467 67.8336-31.1392 59.5872-113.934933 54.3072-196.280533 9.317333-7.2192 15.3824-18.941867 15.3824-32.183467 0-14.197333-6.9696-26.645333-17.444267-33.672533 1.2064-44.096 10.190933-83.5456 41.0272-109.066667 0.2528-0.674133 0.9696-1.293867 2.301867-1.864533l234.010667-101.1072c8.6784-3.719467 18.5344 0.786133 22.013867 10.065067l0.308267 0.8192c3.479467 9.277867-0.734933 19.8144-9.4144 23.5328L327.706667 444.757333l176.968533 64.1728c21.2192 8.2112 16.766933 8.263467 37.816533 0.119467l337.812267-124.1216C901.352533 376.784 901.213867 363.525333 879.994667 355.316267zM504.138667 556.939733l-214.216533-77.6256 0 58.379733c11.198933 10.968533 17.378133 26.702933 17.378133 44.187733 0 15.720533-5.138133 30.021333-13.816533 40.72 2.839467 9.168 7.784533 18.129067 14.848 20.948267 124.666667 73.671467 296.9888 72.843733 435.592533-7.4496 10.279467-9.150933 18.2304-20.482133 18.2304-31.454933L762.154667 476.0576l-220.039467 81.000533C521.0688 565.2032 525.357867 565.149867 504.138667 556.939733z" />
                      </svg>
                    </span>
                    <span className="radio-label">Student</span>
                  </span>
                </label>

                <label>
                  <input
                    className="radio-input"
                    type="radio"
                    value="university"
                    name="role"
                    onChange={HandleChange}
                  />
                  <span className="radio-tile">
                    <span className="radio-icon mb-1">
                      <svg
                        className="svg-icon"
                        width="1097px"
                        viewBox="0 0 1097 1054"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        style={{ width: 40, height: 30 }}
                      >
                        <path d="M548.571429 0l548.571428 219.428571v73.142858h-73.142857q0 14.857143-11.714286 25.714285t-27.714285 10.857143H112.571429q-16 0-27.714286-10.857143T73.142857 292.571429h-73.142857V219.428571zM146.285714 365.714286h146.285715v438.857143h73.142857V365.714286h146.285714v438.857143h73.142857V365.714286h146.285714v438.857143h73.142858V365.714286h146.285714v438.857143h33.714286q16 0 27.714285 10.857142t11.714286 25.714286v36.571429H73.142857v-36.571429q0-14.857143 11.714286-25.714286t27.714286-10.857142h33.714285V365.714286z m911.428572 548.571428q16 0 27.714285 10.857143t11.714286 25.714286v73.142857H0v-73.142857q0-14.857143 11.714286-25.714286t27.714285-10.857143h1018.285715z" />
                      </svg>
                    </span>
                    <span className="radio-label">University</span>
                  </span>
                </label>

                <label>
                  <input
                    className="radio-input"
                    type="radio"
                    value="communityleader"
                    name="role"
                    onChange={HandleChange}
                  />
                  <span className="radio-tile">
                    <span className="radio-icon ">
                      <svg
                        className="svg-icon"
                        viewBox="0 0 950 900"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        style={{ width: 50, height: 40 }}
                      >
                        <path d="M512 256m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z" />
                        <path d="M199.111111 341.333333m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z" />
                        <path d="M824.888889 341.333333m-85.333333 0a85.333333 85.333333 0 1 0 170.666666 0 85.333333 85.333333 0 1 0-170.666666 0Z" />
                        <path d="M824.888889 483.555556c-25.6 0-48.355556 8.533333-71.111111 19.911111l-241.777778 142.222222-241.777778-142.222222c-22.755556-11.377778-45.511111-19.911111-71.111111-19.911111-79.644444 0-142.222222 62.577778-142.222222 142.222222v227.555555h284.444444v-176.355555l142.222223 85.333333c5.688889 2.844444 8.533333 5.688889 14.222222 5.688889s8.533333 2.844444 14.222222 2.844444 8.533333 0 14.222222-2.844444c5.688889 0 8.533333-2.844444 14.222222-5.688889l142.222223-85.333333V853.333333h284.444444v-227.555555c0-79.644444-62.577778-142.222222-142.222222-142.222222z" />
                        <path d="M512 580.266667l136.533333-79.644445c-17.066667-56.888889-71.111111-99.555556-136.533333-99.555555s-116.622222 42.666667-136.533333 99.555555l136.533333 79.644445z" />
                      </svg>
                    </span>
                    <span className="radio-label">Community Leader</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Fields */}
            <input
              type="email"
              name="email"
              onChange={HandleChange}
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Email address"
            />
            <input
              type="password"
              name="password"
              onChange={HandleChange}
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200  focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Password"
            />

            <label
              htmlFor="remember-me"
              className="text-sm text-gray-900 cursor-pointer"
            >
              <input type="checkbox" id="remember-me" className="mr-2" />
              Remember me
            </label>
            <p className="text-gray-900 mt-4">
              {" "}
              Do not have an account?{" "}
              <Link
                to="../register"
                className="text-sm text-blue-500 -200 hover:underline mt-4"
              >
                Sign Up
              </Link>
            </p>

            <button
              className="overflow-hidden w-full p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group mt-2"
              type="submit"
            >
              Login
              <span className="absolute w-full h-32 -top-8 -left-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-full h-32 -top-8 -left-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-full h-32 -top-8 -left-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 z-10 block w-full">
                Login!
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
