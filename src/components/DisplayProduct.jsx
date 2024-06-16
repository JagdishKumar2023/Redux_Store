import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const DisplayProduct = () => {
  const product = useSelector((state) => state.product);

  return (
    <div>
      {product.map((ele) => (
        <div className="containerAllItems" key={ele.id}>
          <img src={ele.image} alt="" className="imageTag" />
          <h4 className="brandforSale">{ele.brand}</h4>
          <p className="priceofProduct">₹{ele.price}</p>
          <button className="addToCartBtn">ADD TO CART</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayProduct;
