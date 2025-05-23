import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-[360px] h-[640px] bg-[#f7f8f9] border border-gray-200 flex flex-col justify-end px-6 pb-6">
        <div>
          {/* Welcome text  */}
          <h1 className="text-[1.5em] leading-[1.1] text-left font-semibold text-black mb-1">
            Welcome to PopX
          </h1>
          {/* Description  */}
          <p className="text-base text-gray-500 text-left mb-6">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>
          {/* Login and Signup buttons  */}
          <div className="flex flex-col gap-3">
            <Link to="/signup">
              <button className="w-full bg-[#6C25FF]  text-white py-3 rounded-md font-medium text-sm">
                Create Account
              </button>
            </Link>

            <Link to="/login">
              <button className="w-full bg-[#E5D6FF] text-[#6C25FF]  py-3 rounded-md font-medium text-sm">
                Already Registered? Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
