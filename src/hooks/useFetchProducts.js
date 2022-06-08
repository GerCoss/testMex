import { useState, useEffect } from "react"
import { getProducts } from "../helpers/getProducts";

// custom hook que ejecuta nuestro helper que nos ayuda a obtener la informacion del api asi como el estado de nuestra variable "loading"
export const useFetchProducts = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        // ejecuta nuestro helper.
        getProducts().then(products => {
            setState({
                data: products,
                loading: false
            })
        })
    }, [])
    

    return state;
}
