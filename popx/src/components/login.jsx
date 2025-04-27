import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[25%] max-w-md p-8 border border-[#F7F8F9] rounded-md bg-gray-50 h-[800px] ">
        <div className="pr-">
          <h2 className="text-2xl font-semibold text-gray-900 mb-">
            Signin to your
          </h2>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            PopX account
          </h2>
          <p className="text-gray-500 text-[14px] leading-[19px] mb-">
            Lorem ipsum dolor sit amet,
          </p>
            <p className="text-gray-500 text-[14px] leading-[19px] mb-6">
            consectetur adipiscing elit,</p>
        </div>
        <div className="space-y-6">

        <div className="flex flex-col gap-1 relative ">
              <label
                className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[101px] text-[13px]"
                htmlFor="fullname"
              >
               Email Address <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter email address"
                //   value="email"
                  required
                  className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 relative">
              <label
                className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[79px] text-[13px]"
                htmlFor="fullname"
              >
                Password<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter password"
                //   value="password"
                  required
                  className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
                />
              </div>
            </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-gray-300 text-white font-semibold py-3 rounded-[6px] cursor-not-allowed"
          onClick={()=> navigate("/profile")}
        >
          Login
        </button>
      </div>
      </div>
    </div>
  );
}
