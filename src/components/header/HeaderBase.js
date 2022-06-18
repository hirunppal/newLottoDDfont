import Headdertop from "./headdertop";
import Searchbar from "./Searchbar";
import { useLocation } from "react-router-dom";
import Headersign from "./unity/Headersign";
function HeaderBase() {
  const locateParth = useLocation().pathname;
  return (
    <>
      <div className="navhead w-screen gap-4 h-auto flex flex-col z-40 ">
        <div className="z-50">
          <Headdertop />
        </div>
        {locateParth == "/cart" ? (
          <Headersign title={"สินค้าในตระกร้า"} />
        ) : locateParth == "/vault" ? (
          <Headersign title={"ประวัติการสั่งซื้อ"} />
        ) : (
          <div className="z-30">
            <Searchbar />
          </div>
        )}
      </div>
    </>
  );
}
export default HeaderBase;
