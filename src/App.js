import "./App.css";
import Products from "./components/Products";
import Total from "./components/Total";

function App() {
  return (
    <div className="App">
      <h1 className="heading">React useContext Task</h1>
      <Products />
      <Total />
    </div>
  );
}

export default App;
