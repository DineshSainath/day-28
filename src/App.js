import "./App.css";
import Products from "./components/Products";
import Total from "./components/Total";
import { CartProvider } from "./context/Context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <div className="App container mt-5">
        <h1 className="heading mb-5">React useContext Task</h1>
        <Products />
        <Total />
      </div>
    </CartProvider>
  );
}

export default App;
