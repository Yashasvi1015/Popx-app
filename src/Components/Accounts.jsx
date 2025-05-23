import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Accounts() {
  const location = useLocation();
  const { fullName, email } = location.state || { fullName: '', email: '' };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-[360px] h-[640px] bg-[#f7f8f9] border border-gray-200 flex flex-col justify-top ">
        <div className="w-full border  p-4 bg-white ">
          <h2 className="text-gray-800 font-medium text-left ">Account Settings</h2>
        </div>
        <div className=" flex flex-col border-b border-gray-300 border-dashed items-left text-center">
          <div className="p-4">
            {/* Image */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-[#6C25FF]  rounded-full w-5 h-5 ">
                  {/* White Camera Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 p-1"
                  >

                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                  </svg>


                </div>
              </div>
              {/* Name and Email  */}
              <div>
                <h3 className="font-medium text-sm text-left text-gray-900">{fullName || "Guest"}</h3>
                <p className="text-sm text-gray-600">{email || "No email provided"}</p>
              </div>
            </div>

            {/* Description Text*/}
            <p className="mt-4 text-xs text-gray-900 text-left ">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}
