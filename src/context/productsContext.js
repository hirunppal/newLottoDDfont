import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createOrderbyCart,
  getallProducts,
  getcartProduct,
} from "../APIs/product";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, Setproducts] = useState([]);
  const [cartItems, SetcartItems] = useState([]);
  const [pdfilter, Setpdfilter] = useState(null);
  const navigate = useNavigate();
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
    return res;
  };
  const createQrtopay = async (resproductOrder) => {
    // const res = await createOrderbyCart(cart);
    // return res;
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
