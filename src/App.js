import "./App.css";
import Products from "./components/Products";
import Total from "./components/Total";
import { CartProvider } from "./context/Context";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1 className="heading">React useContext Task</h1>
        <Products />
        <Total />
      </div>
    </CartProvider>
  );
}

export default App;
