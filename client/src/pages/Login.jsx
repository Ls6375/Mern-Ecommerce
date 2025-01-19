import React, { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Signup");

	const onSubmitHandler = async (event) =>{ 
		event.preventDefault();
	}
  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.px] w-8 bg-gray-800" />
      </div>
      {currentState === "Signup" ? (
        <input required
          type="text"
          className="w-full px-3 py-2 border-collapse border-gray-800"
          placeholder="Name"
          name=""
          id=""
        />
      ) : null}
      <input required
        type="email"
        className="w-full px-3 py-2 border-collapse border-gray-800"
        placeholder="Email"
        name=""
        id=""
      />
      <input required
        type="password"
        className="w-full px-3 py-2 border-collapse border-gray-800"
        placeholder="Passowrd"
        name=""
        id=""
      />
			<div className="w-full flex justify-between text-sm mt-[-8px]">
				<p className="cursor-pointer">Forgot Your Password?</p>
				{
					currentState === "Login" ? 
					<p onClick={()=> setCurrentState('Signup')} className="cursor-pointer">Create account</p>
					:
					<p onClick={()=> setCurrentState('Login')} className="cursor-pointer">Login Here</p>
				}
			</div>
			<button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState === 'Login' ? 'Sign In' : 'Sign up' }</button>
    </form>
  );
}

export default Login;
