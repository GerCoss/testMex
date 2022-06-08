import React, { useState, useEffect } from "react";
import {
    Link
  } from "react-router-dom";

import "../App.css";


const Products = () => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const getData = async() => {
      const url = "https://fakestoreapi.com/products";
      const resp = await fetch(url);
      const data = await resp.json();
      const products = data.map(product=> {
          return{
              id: product.id,
              title: product.title,
              image: product.image,
              price: product.price,
              category: product.category
          }
      })

      setLoading(false);
      setInfo(products);
  }

  return (
    <div className="products-container">
      {loading && (
        <div>
          {" "}
          <h1>Cargando...</h1>
        </div>
      )}

      {info.map(({id,image,title,price})=> ( 
          <Link key={id} to={`/product/${id}`}>
            <div  className="card">
            <div><img src={image} alt="#"/></div>
            <div className="card-description">
                <h6>{title}</h6>
                <h6>{`Price: ${price}`}</h6>
            </div>
            </div>
          </Link>
      ))}
    </div>
  );
};

export default Products;
