import React, { useContext } from "react";
import "./RelateProduct.scss";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";
const RelateProduct = (props) => {
  let { product } = props;
 // console.log(">>>", product);
  const { all_product } = useContext(ShopContext);
 // console.log("check: ", all_product);
  const products = all_product
    .filter((item) => item.category === product.category)
    .slice(0, 4);
 // console.log("check: ", products);

  return (
    <div className="relateproduct">
      <h2>Related Products</h2>
      <hr />
      <div className="list-products">
        {products.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default RelateProduct;
