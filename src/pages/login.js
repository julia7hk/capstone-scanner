function Login() {
  return (
    <div className="my-60 mx-40 border border-red-900 rounded-lg">
      <h1 className="text-3xl text-center">login</h1>
      <label for = "uname">User Name: </label>
      <input type="text" id="uname" name="uname" value="username" /><br></br>
      <label for = "pword">Password: </label>
      <input type="password" id="pword" name="pword" value="password" /><br></br>
      <button>submit</button>
    </div>

  );
}

export default Login;
