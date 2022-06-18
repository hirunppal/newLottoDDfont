import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createOrderbyCart,
  getallProducts,
  getcartProduct,
  getQrcode,
} from "../APIs/product";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, Setproducts] = useState([]);
  const [cartItems, SetcartItems] = useState([]);
  const [pdfilter, Setpdfilter] = useState(null);
  const [orders, setOrders] = useState(null);
  const [Qr, setQr] = useState(null);
  const [paymodal, setpaymodal] = useState(false);
  const [ordertopay, setordertopay] = useState(null);

  const [searchbarState, setSearchbarstate] = useState(false);

  // const navigate = useNavigate();
  useEffect(() => {
    const fetchpd = async () => {
      const pd = await getallProducts();
      if (pdfilter) {
        function search(products) {
          return products.lottoNum.includes(pdfilter);
        }
        Setproducts(pd.products.filter(search));
      } else Setproducts(pd.products);
    };
    fetchpd();
  }, [pdfilter]);

  const getProductCart = async (id) => {
    const res = await getcartProduct(id);
  };
  const createOrder = async (cart) => {
    const res = await createOrderbyCart(cart);
    console.log(res);
    return res;
  };
  const createQrtopay = async (id) => {
    const res = await getQrcode(id);
    // console.log(res);
    return res;
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        Setpdfilter,
        cartItems,
        SetcartItems,
        createOrder,
        createQrtopay,
        searchbarState,
        setSearchbarstate,
        orders,
        setOrders,
        setQr,
        Qr,
        paymodal,
        setpaymodal,
        ordertopay,
        setordertopay,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
const useProduct = () => {
  const ctx = useContext(ProductContext);
  return ctx;
};

export { ProductContext, ProductContextProvider, useProduct };
