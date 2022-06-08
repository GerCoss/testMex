//usa fetch para obeter la data del api fakestore
export const getProducts = async() => {
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

      return(products);
  }