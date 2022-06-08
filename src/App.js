import "./App.css";
import { AuthContextProvider } from "./context/auth";
import "./dist/output.css";
import Mainrounte from "./Routes/mainroute";
function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <div className="Great flex h-screen w-auto flex-auto flex-col ">
          <Mainrounte></Mainrounte>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
