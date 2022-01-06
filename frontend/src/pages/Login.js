import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { login } from "../redux/actions/auth";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errorMessage = useSelector((state) => state.error);
  const user = useSelector((state) => state.auth);
  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  if (user.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="bg-[#F0F2F5] w-screen min-h-screen flex flex-col lg:flex-row justify-center items-center space-y-8 md:space-x-8">
      <div className="flex flex-col max-w-md xl:max-w-xl text-center lg:text-left">
        <h1 className="text-[#1877F2] text-6xl md:text-7xl font-bold">
          facebook
        </h1>
        <p className="font-light text-2xl md:text-3xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="bg-white rounded-xl flex flex-col px-4 py-3 w-full max-w-md">
        {errorMessage.message && (
          <div className="flex-grow flex justify-center items-center">
            <p className="text-red-500">{errorMessage.message}</p>
          </div>
        )}
        <form className="flex-grow flex flex-col">
          <input
            type="text"
            placeholder="Email Address"
            className="border border-gray-200 rounded-lg px-4 py-3 mt-5 flex-grow focus:outline-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-200 rounded-lg px-4 py-3 mt-5 flex-grow focus:outline-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          />
          <button
            type="submit"
            className="flex-grow bg-[#1877F2] hover:bg-[#135dbd] transition-all duration-300 px-4 py-3 rounded-lg mt-4 text-white text-xl font-bold"
            onClick={handleLogin}
          >
            Log In
          </button>
        </form>
        <div className="flex-grow border border-gray-200 mt-4"></div>
        <div className="flex-grow flex justify-center items-center">
          <a href="/register">
            <button className="bg-[#42A421] hover:bg-[#388b0f] transition-all duration-300 px-4 py-3 rounded-lg mt-4 text-white text-xl font-bold max-w-xs">
              Create New Account
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
