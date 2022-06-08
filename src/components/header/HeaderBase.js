import axios from "axios";
import Itemcards from "../ProductBody/itemcards";
import Headdertop from "./headdertop";
import Searchbar from "./Searchbar";
function HeaderBase() {
  // const getomise = async () => {
  //   const checkoutFrom = await axios.get("https://cdn.omise.co/omise.js");
  //   console.log(checkoutFrom);
  //   return checkoutFrom;
  // };
  // getomise();
  return (
    <>
      <div className="navhead w-screen gap-4 h-auto flex flex-col">
        <Headdertop />
        <Searchbar />
      </div>
    </>
  );
}
export default HeaderBase;
