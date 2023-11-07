import React from "react";
import { useDispatch, useSelector } from "react-redux";

// mock data
import { mockData } from "../data";

// actions
import { addToCart } from "../redux/app.actions";

export default function ShopItem() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.app.carts);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setProducts(mockData);
  }, []);

  function handleAddToCart(product) {
    const payload = {
      ...product,
      quantity: 1
    }
    dispatch(addToCart(payload));
  }

  return (
    <div className="shopItem">
      {products.map((product) => {
        const isExisted = carts.some(cart => cart.id === product.id)
        
        return (
          <React.Fragment key={product.id}>
            <div
              className="shopItem_image"
              style={{ backgroundColor: product.color }}
            >
              <img alt="" src={product.image} />
            </div>
            <div className="shopItem_name">{product.name}</div>
            <div className="shopItem_description">{product.description}</div>
            <div className="shopItem_bottom">
              <div className="shopItem_price">${product.price}</div>
              <div
                style={{
                  cursor: isExisted ? "not-allowed" : "default",
                  opacity: isExisted ? 0.5 : 1,
                }}
                className="shopItem_button"
                onClick={isExisted ? null : () => handleAddToCart(product)}
              >
                <p>ADD TO CART</p>
              </div>
            </div>
            <br />
          </React.Fragment>
        )
      })}
    </div>
  );
}
