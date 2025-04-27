import { useState } from "react";
import { FaCamera } from "react-icons/fa";

export default function AccountSettings() {
  const [user] = useState({
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
    image: "/Ellipse 114.png",
  });
  return (
    <div
      className="w-[25%] mx-auto mt-10 bg-gray-50 shadow border border-[#F7F8F9] min-h-[800px]"
      style={{ fontFamily: "Rubik, sans-serif" }}
    >
      <div className="flex bg-white justify-left items-left p-4">
        <p className="text-lg mx-4 text-[#1D2226]">Account Settings</p>
      </div>

      <div className="bg-[#F7F8F9] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative">
          <img
            src={user.image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1 cursor-pointer hover:bg-purple-700">
            <FaCamera className="text-white w-4 h-4" />
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold">{user.name}</h3>
          <p className="text-gray-500 text-sm">{user.email}</p>
        </div>
      </div>
      <p className="mt-4 text-[#1D2226] text-sm mx-6">{user.bio}</p>
      <div className="border-t border-dashed border-[#CBCBCB] mt-8"></div>
      <div className="border-t border-dashed border-[#CBCBCB] mt-[480px]"></div>
    </div>
  );
}
