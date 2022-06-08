import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Product({location}){
    const [loading, setLoading] = useState(false);
    const params = useParams();

    const {id} = params;
    const [{title,image,price,description}, setInfo] = useState([]);

    useEffect(() => {
        setLoading(true);
        getData();
      }, []);
    
      const getData = async() => {
          const url = `https://fakestoreapi.com/products/${id}`;
          const resp = await fetch(url);
          const data = await resp.json();
          const product = data;
          setInfo(product);
          setLoading(false);
      }

    return(
        
        <div>
            {loading && (
                <div>
                {" "}
                <h1>Cargando...</h1>
                </div>
            )}

            {!loading && (
                <div>
                    <div><img src={image} alt="#"/></div>
                    <h1>{title}</h1>
                    <div>{`Price: ${price}`}</div>
                    <div>{description}</div>
                </div>
            )   
            }
        </div>
    )
}

export default Product;