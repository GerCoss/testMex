//usa fetch para obeter la data del api fakestore
export const getProduct = async(id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const product = data;
    

    return(product);
}