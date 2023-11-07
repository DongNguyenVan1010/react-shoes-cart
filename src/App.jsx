import Cart from "./components/cart";
import ShopItemList from "./components/ShopItemList";
import "./style.css";

function App() {
  return (
    <div className="mainContent">
      <ShopItemList />
      <Cart />
    </div>
  );
}

export default App;
