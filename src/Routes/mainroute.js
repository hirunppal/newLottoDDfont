import { Route, Routes, Navigate } from "react-router-dom";
import Mycart from "../components/checkout/Mycart";
import HeaderBase from "../components/header/HeaderBase";
import Serchbody from "../components/ProductBody/productHero";
import Searchpage from "../pages/searchpage";
import Authlayout from "../layout/Authlayout";
import { useAuth } from "../context/auth";
import Signinpage from "../pages/Signinpage";

function Mainrounte() {
  // const transaction = [1, 2, 3, 4];
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/index" element={<HeaderBase />}></Route>
      <Route path="/" element={<Authlayout />}>
        <Route path="search" element={<Searchpage />} />
        <Route path="cart" element={<Mycart />} />
        <Route path="sn" element={<Signinpage />} />
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
