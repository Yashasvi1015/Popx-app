import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValue = name === 'phone' ? value.replace(/\D/g, '') : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, phone, email, password, isAgency } = formData;

    if (!fullName || !phone || !email || !password || !isAgency) {
      alert("Please fill in all required fields marked with *.");
      return;
    }

    // All required fields are filled, proceed to navigate
    navigate('/accounts', {
      state: {
        fullName: formData.fullName,
        email: formData.email,
      },
    });
  };


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-[360px] h-[640px] bg-[#f7f8f9] border border-gray-200 flex flex-col justify-end px-6 pb-6">
        <h2 className="text-gray-900 text-xl  font-bold mb-6">Create your PopX account</h2>
        <form className="space-y-6" onSubmit={handleSubmit} >
          {/* Full Name */}
          <div className="relative w-full mt-6">
            <label htmlFor="fullName" className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-sm text-[#6C25FF] ">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border  text-gray-900 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF] "
            />
          </div>

          {/* Phone Number */}
          <div className="relative w-full  mt-6">
            <label htmlFor="phone" className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-sm text-[#6C25FF] ">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              className="w-full border  text-gray-900 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF] "
            />
          </div>

          {/* Email */}
          <div className="relative w-full mt-6">
            <label htmlFor="email" className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-sm text-[#6C25FF] ">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border  text-gray-900 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF] "
            />
          </div>

          {/* Password */}
          <div className="relative w-full mt-6">
            <label htmlFor="password" className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-sm text-[#6C25FF] ">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border  text-gray-900 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF] "
            />
          </div>

          {/* Company Name */}
          <div className="relative w-full  mt-6">
            <label htmlFor="company" className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-sm text-[#6C25FF] ">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border text-gray-900 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#6C25FF] "
            />
          </div>

          {/* Are you an agency? */}
          <div className="w-72 mt-6">
            <p className="text-sm text-left  text-gray-900 mb-1 flex items-center gap-1">Are you an agency? <span className="text-red-500">*</span> </p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-gray-900">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                  className="appearance-none w-4 h-4 border-1 border-gray-800 rounded-full checked:bg-[#6C25FF]  checked:border-[#6C25FF]  focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
                />

                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-900">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                  className="appearance-none w-4 h-4 border-1 border-gray-800 rounded-full checked:bg-[#6C25FF] checked:border-[#6C25FF]  focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
                />
                No
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className=" w-full mt-6 px-4 py-2 bg-[#6C25FF]  text-white rounded-md hover:bg-[#6C25FF]  transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
