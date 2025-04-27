import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CreateAccount() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f,[name]:value}));
  };
  return (
    <div className="flex flex-col items-center justify-center mt-5 h-[580px] mt-[150px] border border-[#F7F8F9]"> 
      <div className="w-[25%] p-6 rounded shadow bg-gray-50 ">
        <h2 className="text-3xl font-semibold ">Create your </h2>
        <h2 className="text-3xl font-semibold mb-6">PopX account</h2>
        <form className="space-y-5">
        <div className="flex flex-col gap-1 relative">
              <label
                className="text-[#6C25FF] absolute -top-2 left-4 pl-1 bg-[#F7F8F9] w-[80px] text-[13px]"
                htmlFor="fullname"
              >
                Full Name<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
                <input
                  type="text"
                  id="fullname"
                  placeholder="Yuvraj"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 relative">
              <label
                className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[105px] text-[13px]"
                htmlFor="fullname"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
                <input
                  type="text"
                  id="fullname"
                  placeholder="+91 9153471582"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 relative">
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
                  placeholder="naam.yuvraj@gmail.com"
                  value={form.fullName}
                  onChange={handleChange}
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
                  placeholder="********"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 relative">
              <label
                className="text-[#6C25FF] absolute -top-2 left-3 pl-1 bg-[#F7F8F9] w-[110px] text-[13px]"
                htmlFor="fullname"
              >
                Company Name<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-[#CBCBCB] rounded-md h-[40px] overflow-hidden">
                <input
                  type="text"
                  id="fullname"
                  placeholder="PopX"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-black h-[40px] text-[12.46px] bg-transparent focus:outline-none focus:ring-0"
                />
              </div>
            </div>
          <fieldset>
            <legend className="text-gray-700 mb-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </legend>
            <div className="flex items-center space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={form.isAgency === "yes"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-purple-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={form.isAgency === "no"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-purple-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </fieldset>
          <button
            type="submit"
            className="w-full py-3 mt-[300px] font-medium rounded-[6px] bg-[#6C25FF] text-white hover:bg-purple-700 transition"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
