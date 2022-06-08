import React, { useState, useEffect } from "react";

function Product({location}){
    const {state} = location;
    const [{title,image,price,description}, setInfo] = useState([]);

    useEffect(() => {
        getData();
      }, []);
    
      const getData = async() => {
          const url = `https://fakestoreapi.com/products/${state}`;
          const resp = await fetch(url);
          const data = await resp.json();
          const product = data;
        //   const product = data.map(product=> {
        //       return{
        //           id: product.id,
        //           title: product.title,
        //           image: product.image,
        //           price: product.price,
        //           description: product.description
        //       }
        //   })
          console.log(data)
          setInfo(product);
      }

    return(
        <div>
            <div><img src={image} alt="#"/></div>
            <h1>{title}</h1>
            <div>{`Price: ${price}`}</div>
            <div>{description}</div>
        </div>
    )
}

export default Product;