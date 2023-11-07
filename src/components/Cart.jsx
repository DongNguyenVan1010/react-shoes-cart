import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {

  const carts = useSelector((state) => state.app.carts);

  console.log('carts', carts)

  return (
    <div className="card">
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>Total: { carts.length }  </div>
      </div>

      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">$0</span>
      </div>

      <div className="cardBody">
        <CartItem />
      </div>
    </div>
  );
}
