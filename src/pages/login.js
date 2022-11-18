function Login() {

  return (
    <div class="h-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
      <div className="flex h-screen items-center justify-center">
        <div classNames="w-4/5 sm:w-96 text-sm">
          <div className="w-32 h-32 mx-auto rounded-full shadow-md overflow-hidden">
              <img className="w-full" src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <h1 className="text-3xl">login</h1>
          <div classNameass="mt-20 p-4 rounded-2xl bg-white shadow-md">
              <label for="username" className="text-gray-500">Username</label>
              <div className="flex items-center mt-4">
                  <i className="fa fa-fw fa-envelope-o text-gray-500"></i>
                  <input
                      type="text"
                      id="username"
                      class="flex-1 mx-3 outline-none bg-transparent"
                      placeholder="please enter your username"
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
                  />
                  <i class="fa fa-fw fa-eye text-gray-500"></i>
              </div>
          </div>
          <div class="login mt-7 shadow-md rounded-full overflow-hidden">
              <button class="w-full p-3 rounded-full text-black hover:opacity-90"
                  >Log in</button>
          </div>
          <div class="flex justify-between mt-7 text-xs">
              <a href="javascript:" class="text-gray-500">sign up - might exist</a>
              <a href="javascript:" class="text-gray-500">Forget Password?</a>
          </div>
        </div>
      </div>
    </div>
    // <div className="my-60 mx-40 border border-red-900 rounded-lg text-center">
    //   <h1 className="text-3xl">login</h1>
    //   <label for = "uname">User Name: </label>
    //   <input type="text" id="uname" name="uname" value="username" /><br></br>
    //   <label for = "pword">Password: </label>
    //   <input type="password" id="pword" name="pword" value="password" /><br></br>
    //   <button 
    //     className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    //   >submit</button>
    // </div>

  );
}

export default Login;
