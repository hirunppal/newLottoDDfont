import SigninForm from "../../layout/form/SigninForm";
import SignupForm from "../../layout/form/SignupForm";
import { useEffect, useState } from "react";

export default function Modal({ avatar, onStart, tryto }) {
  const [switching, setSwitching] = useState(0);
  const [showModal, setShowModal] = useState(false);
  console.log(tryto); // const [blip, setblipping] = useState(false);

  return (
    <>
      <div
        className="inline"
        onClick={() => {
          setShowModal(true);
          if (onStart) {
            setShowModal(1);
          }
        }}
      >
        {avatar}
      </div>
      {showModal ? (
        <>
          <div
            className=" bg-neutral bg-opacity-40 focus:bg-opacity-20 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none   "
            onDoubleClick={(e) => setShowModal(false)}
          >
            {/* <div className="py-12 px-6 h-2/3"> */}
            <div className="flex justify-center bg-white shadow-lg rounded-lg items-center flex-warp gap-6 text-gray-800 ">
              <SigninForm
                setSwitching={setSwitching}
                switching={switching}
                setShowModal={setShowModal}
                tryto={tryto}
              />
              <SignupForm
                setSwitching={setSwitching}
                switching={switching}
                setShowModal={setShowModal}
                tryto={tryto}
              />
            </div>
            <button className="-mt-96 " onClick={() => setShowModal(false)}>
              <span className=" text-gray-400 h-6 w-6 text-4xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
            {/* </div> */}
          </div>
        </>
      ) : null}
    </>
  );
}

{
  /* just how to close modal */
}
{
  /*footer*/
}
{
  /* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
    <button
      className="text-red-500 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => setShowModal(false)}
    >
      Close
    </button>
    <button
      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={() => setShowModal(false)}
    >
      Save Changes
    </button>
  </div>{" "}
  */
}
// export { showModal };
