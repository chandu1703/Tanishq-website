import React from "react";
import Products from "./products.json";
import "./Allitems.scss";
const Allitems = () => {
  return (
    <div className="container1">
      {Products?.map((product) => (
        <div key={product.id} className="items">
          <div className="image">
            <img
              
              src={product.img}
              alt="product"
              // className="img"
            />
          
          <div>
            <h3 className="alignments">{product.name}</h3>
            <h3 className="alignments">₹{product.price}</h3>
            {product.charges && (
              <div className="alignments charges">{product.charges}</div>
            )}
            <div>
              <button className="btn"> QUICK VIEW</button>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Allitems;
