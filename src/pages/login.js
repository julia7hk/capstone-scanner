import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  function login() {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error.code.message);
    });
  }

  return (
    <div class="h-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
      <div className="flex h-screen items-center justify-center">
        <div classNames="w-4/5 sm:w-96 text-sm">
          <div className="w-32 h-32 mx-auto rounded-full shadow-md overflow-hidden">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <h1 className="text-3xl">login</h1>
          <div classNameass="mt-20 p-4 rounded-2xl bg-white shadow-md">
            <label for="username" className="text-gray-500">
              Email
            </label>
            <div className="flex items-center mt-4">
              <i className="fa fa-fw fa-envelope-o text-gray-500"></i>
              <input
                type="text"
                id="username"
                class="flex-1 mx-3 outline-none bg-transparent"
                placeholder="please enter your email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
          </div>
          <div class="mt-7 p-4 rounded-2xl bg-white shadow-md">
            <label for="password">Password</label>
            <div class="flex items-center mt-4">
              <i class="fa fa-fw fa-lock text-gray-500"></i>
              <input
                type="password"
                id="password"
                class="flex-1 mx-3 outline-none bg-transparent"
                placeholder="Please enter password hear"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <i class="fa fa-fw fa-eye text-gray-500"></i>
            </div>
          </div>
          <div class="login mt-7 shadow-md rounded-full overflow-hidden">
            <button
              class="w-full p-3 rounded-full text-black hover:opacity-90"
              onClick={login()}
            >
              Log in
            </button>
          </div>
          <div class="flex justify-between mt-7 text-xs">
            <a href="javascript:" class="text-gray-500">
              sign up - might exist
            </a>
            <a href="javascript:" class="text-gray-500">
              Forget Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
