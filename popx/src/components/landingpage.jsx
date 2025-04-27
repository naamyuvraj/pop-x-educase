import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center p-5 pb-3">
      <div className="w-[25%] rounded shadow overflow-hidden border border-[#F7F8F9] bg-white ">
        <div className="h-[570px] bg-gray-50 p-6"></div>

        <div className="p-6 bg-gray-50">
          <div className="pr-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to PopX
            </h1>
            <p className="text-xl text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <button
            onClick={() => navigate("/createaccount")}
            className="w-full py-3 mb-4 bg-[#6C25FF] text-white font-medium rounded-[6px] hover:bg-violet-700 transition"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full py-3 bg-[#6C25FF4B] text-gray-800 font-medium rounded-[6px] hover:bg-violet-300 transition"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
