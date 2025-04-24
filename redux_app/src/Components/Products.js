import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products`);
      setProducts(res.data);
      console.log(res.data);
    };

    getProducts();
  }, []);
  return (
    <div>
      <div className="productsWrapper">
        {products.map((product) => {
          return (
            <div className="card">
              <img src={product.image} />
              <h5>{product.title}</h5>
              <h4>{product.price}</h4>
              <button className="btn" onClick={() => handleClick(product)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
