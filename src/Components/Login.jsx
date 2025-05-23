import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-[360px] h-[640px] bg-[#f7f8f9] border border-gray-200 flex flex-col justify-top px-6 pb-6">
        {/* Intro  */}
        <h2 className="text-2xl font-semibold text-left align-top text-gray-900 mt-5">
          Signin to your<br />PopX account
        </h2>
        <p className="text-base text-gray-500 text-left mb-2 ">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
        <form className="space-y-4">
          {/* Email Field */}
          <div className="relative w-72 mt-6">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-sm text-[#6C25FF]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border text-gray-500 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
              placeholder="Enter email address"
            />
          </div>

          {/* Password Field */}
          <div className="relative w-72 mt-6">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3  bg-[#f7f8f9] px-1 text-sm text-[#6C25FF]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full  text-gray-500 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
              placeholder="Enter your password"
            />
          </div>

           {/* Button  */}
          <button
            type="submit"
            className="w-full py-2 bg-gray-300 text-gray-600 rounded-md text-sm font-medium cursor-not-allowed"
            disabled
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

