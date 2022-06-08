import React, { useState } from "react";

function SigninForm({ switching, setSwitching }) {
  const [email0rPhone, setemail0rPhone] = useState();
  const [password, setpassword] = useState();
  return (
    <div
      // className="lg:w-11/12 px-6 md:px-0 flex flex-nowrap "
      className={`lg:w-11/12 h-130 ${
        switching ? "hidden" : "flex"
      } duration-200 items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none  `}
    >
      <div className=" text-black px-4 py-3 md:p-12 md:mx-6">
        <div className="text-center">
          <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Signin</h4>
        </div>
        <form>
          <p className="mb-4">Please login to your account</p>
          <div className="mb-4">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="อีเมล / เบอร์โทรศัพท์"
              value={email0rPhone}
              onChange={(e) => {
                setemail0rPhone(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div className="text-center pt-1 mb-12">
            <div className="gradLogin">
              <button
                className=" inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full"
                type="submit"
              >
                Log in
              </button>
            </div>
            <a className="text-gray-500 block m-1" href="#!">
              ลืมรหัสผ่าน?
            </a>
          </div>
          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">Don't have an account?</p>
            <button
              type="button"
              className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              //   data-mdb-ripple="true"
              //   data-mdb-ripple-color="light"
              onClick={() => {
                setSwitching(1);
              }}
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;
