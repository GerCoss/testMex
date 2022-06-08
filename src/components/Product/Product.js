// Este componente muestra el detalle del producto seleccionado


import { useParams } from "react-router-dom";
import { useFetchProduct } from "../../hooks/useFetchProduct";

function Product({location}){

    //useParams nos permite obtener el id proveniente de react router
    const params = useParams();
    const {id} = params;

    //Uso de custom hook el cual nos proporciona la informacion de la peticion con fetch asi como el estado de "loading"
    const {data, loading} = useFetchProduct(id);
    const {title,image,price,description} = data;

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