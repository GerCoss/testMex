//Este componente muestra todos los productos proporcionados por el api

import {
    Link
  } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";

import "./Products.css";


const Products = () => {

  //Uso de custom hook el cual nos proporciona la informacion de la peticion con fetch asi como el estado de "loading"
  const {data, loading} = useFetchProducts();


  return (
    <div className="products-container">
      {loading && (
        <div>
          {" "}
          <h1>Cargando...</h1>
        </div>
      )}

      {data.map(({id,image,title,price})=> ( 
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
