import { useState, useEffect, createContext } from "react";

const ProductContext = createContext();

const ProductProvider= ({children}) => {

    const [items, setItems] = useState([]);
    const product = "https://fakestoreapi.com/products";
    console.log(items);

    useEffect(() =>{
        const fetchApi = async() => {
            try{
                const response = await fetch(product);
                const json = await response.json();
                console.log(json);
                setItems(json);
            }
            catch(Error){
                console.error("Error fetching products:");
            }
        }
        fetchApi();
    },[]);

    return(
        <ProductContext.Provider value={{items}}>
            {children}
        </ProductContext.Provider>
    )
}


export { ProductContext, ProductProvider }