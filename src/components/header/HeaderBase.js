import Headdertop from "./headdertop";
import Searchbar from "./Searchbar";
import { useLocation } from "react-router-dom";
function HeaderBase() {
  const locateParth = useLocation().pathname;
  return (
    <>
      <div className="navhead w-screen gap-4 h-auto flex flex-col z-50 ">
        <Headdertop />
        {locateParth == "/cart" ? (
          <div className=" flex  p-8 text-white mx-auto ">
            <h1 className="text-font-Kanit text-2xl text-center">
              ตระกร้าสินค้า
            </h1>
          </div>
        ) : (
          <Searchbar />
        )}
      </div>
    </>
  );
}
export default HeaderBase;
