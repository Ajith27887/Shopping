import React from "react";


async function Shopping() {
    const product = "https://fakestoreapi.com/products";
    try{
        const response = await fetch(product);
        const json = await response.json();
        console.log(json);
    }
    catch(Error){
        console.error("Error2");
    }
}

export default Shopping;