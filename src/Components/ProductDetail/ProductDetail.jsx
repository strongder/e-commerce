import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import "./ProductDetail.scss";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import RelateProduct from "../RelatedProduct/RelateProduct";
import { ShopContext } from "../../Context/ShopContext";
function ProductDetail(props) {
  let { product } = props;
  const {addItemToCart}  = useContext(ShopContext)
  return (
    <>
      <div className="product-detail">
        <div className="product-detail-left">
          <div className="product-detail-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="product-detail-img">
            <img className="product-main" src={product.image} alt="" />
          </div>
        </div>
        <div className="product-detail-right">
          <h2>{product.name}</h2>
          <div className="product-detail-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(123)</p>
          </div>

          <div className="product-detail-prices">
            <div className="product-detail-price-old">${product.old_price}</div>
            <div className="product-detail-price-new">${product.new_price}</div>
          </div>
          <div className="product-detail-description">
            A lightweight, usually knitted, pullover shirt, close-fitting and w
          </div>
          <div className="product-detail-size">
            <h1>Select size</h1>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick={()=>addItemToCart(product.id)}>ADD TO CART</button>
        </div>
      </div>
      <DescriptionBox></DescriptionBox>
      <RelateProduct product = {product}/>
    </>
  );
}

export default ProductDetail;
