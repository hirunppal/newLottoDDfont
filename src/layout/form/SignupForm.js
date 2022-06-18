import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

function SignupForm({ switching, setSwitching, tryto, setShowModal }) {
  const [firstName, setFirstname] = useState();
  const [lastName, setlastname] = useState();
  const [emailOrPhone, setemailOrPhone] = useState();
  const [password, setpassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handlesubmitSignup = async (el) => {
    try {
      el.preventDefault();
      const input = {
        firstName,
        lastName,
        emailOrPhone,
        password,
        confirmPassword,
      };
      await signUp(input);
      setShowModal(false);
      if (tryto) {
        navigate(tryto);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div
        className={`lg:w-fit  will-change-auto  h-130 ${
          switching ? "flex" : "hidden"
        }  items-center  lg:rounded-lg  lg:rounded-bl-none gradLogin `}
      >
        <div className="text-black px-4 py-3 md:p-12 md:pt-8 md:pb-8 md:mx-6">
          {/* signup */}

          <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Sign Up</h4>

          <form onSubmit={handlesubmitSignup}>
            <div className="flex  flex-wrap  "></div>
            <p className="mb-4">กรุณากรอกข้อมูล เพื่อสมัครสมาชิก </p>
            <div className="mb-4">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="ชื่อ"
                value={firstName}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="นามสกุล"
                value={lastName}
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
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
            <div className="mb-4">
              <input
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
            </div>
            <div className="text-center pt-1 mb-6">
              <div className="gradLogin">
                <button
                  className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pb-0">
              <p className="mb-0 mr-2 text-sm text-zinc-100">registered?</p>
              <button
                type="button"
                className="inline-block px-6 py-2 border-2 border-x-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                onClick={() => {
                  setSwitching(0);
                }}
              >
                SignIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
