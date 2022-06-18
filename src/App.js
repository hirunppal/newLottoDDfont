import "./App.css";
import { AuthContextProvider } from "./context/auth";
import { ProductContextProvider } from "./context/productsContext";
import "./dist/output.css";
import Mainrounte from "./Routes/mainroute";
function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <div className="App">
          <div className="Great flex h-screen w-auto flex-auto flex-col ">
            <Mainrounte />
          </div>
        </div>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
