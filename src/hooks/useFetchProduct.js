import { useState, useEffect } from "react"
import { getProduct } from "../helpers/getProduct";

// custom hook que ejecuta nuestro helper que nos ayuda a obtener la informacion del api asi como el estado de nuestra variable "loading"
export const useFetchProduct = (id) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        // ejecuta nuestro helper.
        getProduct(id).then(product => {
            setState({
                data: product,
                loading: false
            })
        })
    }, [id])
    

    return state;
}
