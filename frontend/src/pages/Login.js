import React from "react";

export default function Login() {
  return (
    <div className="bg-[#F0F2F5] w-screen min-h-screen flex flex-col lg:flex-row justify-center items-center space-y-4 md:space-x-8">
      <div className="flex flex-col max-w-md xl:max-w-xl text-center lg:text-left">
        <h1 className="text-[#1877F2] text-4xl md:text-7xl font-bold">
          facebook
        </h1>
        <p className="font-light text-2xl md:text-3xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="bg-white rounded-xl flex flex-col px-4 py-3 w-full max-w-md">
        <form className="flex-grow flex flex-col">
          <input
            type="text"
            placeholder="Email Address"
            className="border border-gray-200 rounded-lg px-4 py-3 mt-5 flex-grow focus:outline-blue-400"
          />
          <input
            type="text"
            placeholder="Password"
            className="border border-gray-200 rounded-lg px-4 py-3 mt-5 flex-grow focus:outline-blue-400"
          />
          <button className="flex-grow bg-[#1877F2] px-4 py-3 rounded-lg mt-4 text-white text-xl font-bold">
            Log In
          </button>
        </form>
        <div className="flex-grow border border-gray-200 my-4"></div>
        <div className="flex-grow flex justify-center items-center">
          <button className="bg-[#42A421] px-4 py-3 rounded-lg mt-4 text-white text-xl font-bold max-w-xs">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}
