import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import Mycart from "../components/checkout/Mycart2Checkout";
import Serchbody from "../components/ProductBody/productHero";
import Searchpage from "../pages/searchpage";
import Modlayout from "../pages/adminpages/admin";
import Homepage from "../pages/home";
import Authlayout from "../layout/Authlayout";
import Checklottopage from "../pages/checklottopage";
import PdCreate from "../components/admins/ProductsManage/PdCreate";

function Mainrounte() {
  // const transaction = [1, 2, 3, 4];
  const { user } = useAuth();
  return (
    <Routes>
      {/* <Route path="/index" element={<HeaderBase />}></Route> */}
      <Route path="/" element={<Authlayout />}>
        <Route
          path=""
          element={
            <>
              <Homepage />
              <Searchpage />
            </>
          }
        />
        <Route path="checklotto" element={<Checklottopage />} />
        <Route path="*" element={<Navigate to="/" />} />

        {user ? <Route path="cart" element={<Mycart />} /> : <></>}
      </Route>
      <Route path="/admin" element={<Modlayout />}>
        {/* <Route path="/admin/products" element={<PdCreate />} /> */}
      </Route>
    </Routes>
  );
}
export default Mainrounte;

{
  /* <nav
  class="container mx-auto px-6 md:px-12 py-4"
  x-data="{ open: false }"
></nav> */
}
{
  /* <header className="w-screen h-14"></header> */
}
