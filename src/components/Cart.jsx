import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {

  const carts = useSelector((state) => state.app.carts);
  const total = carts.reduce((acc, cart) => acc + cart.quantity, 0)

  return (
    <div className="card">
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>Total: { total }  </div>
      </div>

      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">${ carts.reduce((acc, cart) => acc + cart.price * cart.quantity, 0) }</span>
      </div>

      <div className="cardBody">
        <CartItem />
      </div>
    </div>
  );
}
