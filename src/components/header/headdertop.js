import { useAuth } from "../../context/auth";
import { AiFillShopping } from "react-icons/ai";
import ModalAuth from "../authUser/ModalAuth";
function Headdertop() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <div className="visible h-5 flex justify-between text-font-Kanit text-white  mt-3 mx-5  ">
        <div className=" flex-none ml-6 block text-2xl">
          <a>ล็อตโต้.DD</a>
        </div>
        {/* <div className="  "></div> */}
        <div className=" flex-grow-2 w-3/6 min-w-200 max-w-lg  flex flex-nowrap justify-between">
          <a className=" block text-lg text-white hover:text-gray-900">
            หน้าหลัก
          </a>
          <a className="block text-lg text-white hover:text-gray-900">
            ตรวจสอบรางวัล
          </a>
          {user ? (
            <div>
              <a className="block text-lg text-white hover:text-gray-900">
                ข้อมูลของฉัน
              </a>
            </div>
          ) : (
            <>
              <ModalAuth
                avatar={
                  <a className=" block text-lg text-white hover:text-gray-900">
                    เข้าสู่ระบบ
                  </a>
                }
              />
              <a className=" block text-lg text-white hover:text-gray-900">
                สมัครสมาชิก
              </a>
              <div className=" cursor-pointer hover:-translate-y-1 hover:scale-120  duration-300">
                <AiFillShopping size={26} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Headdertop;
