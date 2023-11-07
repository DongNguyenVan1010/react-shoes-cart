import React from "react";

// mock data
import { mockData } from "../data";


export default function ShopItem() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setProducts(mockData);
  }, []);

  return (
    <div className="shopItem">
      {products.map((product) => {
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
              
                className="shopItem_button"
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
