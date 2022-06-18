import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";

function AdminAuth() {
  const [emailOrPhone, setemailOrPhone] = useState();
  const [password, setpassword] = useState();
  const { Signin } = useAdmin();
  const handlesubmitSignIn = async (e) => {
    e.preventDefault();
    const input = { emailOrPhone, password };
    await Signin(input);
  };
  return (
    <div>
      <form onSubmit={handlesubmitSignIn}>
        <p className="mb-4">Please auth your self</p>
        <div className="mb-4">
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="อีเมล / เบอร์โทรศัพท์"
            value={emailOrPhone}
            onChange={(e) => {
              setemailOrPhone(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className="text-center pt-1 mb-12">
          <div className="">
            <button
              className=" inline-block px-6 py-2.5 text-white text-xs uppercase rounded shadow-md hover:bg-zinc-700 transition duration-150 ease-in-out w-full"
              type="submit"
            >
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminAuth;
