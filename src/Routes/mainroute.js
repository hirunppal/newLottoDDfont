import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import Mycart from "../components/checkout/Mycart2Checkout";
import Searchpage from "../pages/searchpage";
import Modlayout from "../pages/adminpages/admin";
import Homepage from "../pages/home";
import Authlayout from "../layout/Authlayout";
import Checklottopage from "../pages/checklottopage";
import { useProduct } from "../context/productsContext";
import Uservalut from "../pages/Uservalut";

function Mainrounte() {
  const { user } = useAuth();
  const { searchbarState } = useProduct();
  return (
    <Routes>
      <Route path="/" element={<Authlayout />}>
        <Route
          path=""
          element={
            <>
              {/* {searchbarState ? null : <Homepage />} */}
              <Searchpage />
            </>
          }
        />
        <Route path="checklotto" element={<Checklottopage />} />
        <Route path="vault" element={<Uservalut />} />
        <Route path="*" element={<Navigate to="/" />} />

        {user ? <Route path="cart" element={<Mycart />} /> : <></>}
      </Route>
      <Route path="/admin" element={<Modlayout />} />
    </Routes>
  );
}
export default Mainrounte;
