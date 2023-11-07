import ShopItem from "./ShopItem";
export default function ShopItemList() {
  return (
    <div className="card">
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
      </div>

      <div className="cardTitle">Our Products</div>

      <div className="cardBody">
        <ShopItem />
      </div>
    </div>
  );
}
