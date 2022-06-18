import React, { useRef, useState } from "react";

function Modalsignin() {
  const [modall, setmodal] = useState("hidden");
  const handeClickmodal = () => {
    setmodal("show");
  };
  const closeModal = () => {
    setmodal("hidden");
  };
  //   });
  return (
    <div>
      <div>
        {/* <script src="https://cdn.tailwindcss.com/"></script> */}
        {/* <div class="w-full min-h-screen flex justify-center items-center bg-black">
          <p
            id="modal-switch"
            class="text-[10vw] bg-gradient-to-r from-indigo-500 via-purple-500 text-transparent bg-clip-text to-pink-500 font-bold cursor-pointer"
            onClick={(el) => handeClickmodal()}
          >
            Click Me
          </p>
        </div> */}
        {/* <!-- Modal  --> */}
        <div className={`w-screen h-screen z-10 ${modall}`}>
          <div
            id="modal-bg"
            className={`w-full h-full z-10 bg-gray-700 bg-opacity-60 top-0 absolute ${modall}`}
          ></div>
          <div
            id="modal-box"
            className={`sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col z-20 items-center gap-2 -translate-y-1/2 p-6 bg-[#FFFFEB] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute ${modall}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                strokeLinejoin="round"
                stroke-width="1"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-2xl font-medium">Payment Successful</span>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              consequatur?
            </p>
            <button
              id="modal-close"
              onClick={(e) => {
                closeModal();
              }}
              className="p-3 bg-[#4F46E5] rounded-lg w-full text-white"
            >
              Click Background
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modalsignin;
