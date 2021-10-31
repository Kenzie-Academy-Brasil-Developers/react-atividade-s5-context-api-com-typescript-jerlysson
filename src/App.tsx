import "./App.css";
import ProductList from "./components/ProductList";
import products from "./assets/products";

import { useCart } from "./Providers/Cart";

function App() {
  const { cart } = useCart();

  return (
    <div className="App">
      <ProductList list={products} inCart={false} />
      <ProductList list={cart} inCart={true} />
    </div>
  );
}

export default App;
