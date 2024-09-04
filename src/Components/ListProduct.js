import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";

import './ListProduct.css'

const ListProduct = () =>{
    const [items, setItems] = useState([]),
        [products, setProducts] = useState([]),
        productApi = "https://fakestoreapi.com/products";
        function handleCart(e) {
            // e.preventDefault();
            console.log("hi");
        };
            
    useEffect(() =>{
        const fetchApi = async() => {
            try{
                const response = await fetch(productApi);
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
        


    return (
        <div className="p-3">
            <div className="container">
                <div className="row gy-5 gx-5">
                    {items.map((product) => (
                        <div className="col-4" key={product.id}>
                            <div className="p-3 shop shopping_card" >
                                <div className="img_container">
                                    <img alt='asd' src={product.image} ></img>
                                </div>
                                <Card.Body  className="d-flex  mt-3 bg-black text-white p-3 rounded justify-content-between">
                                    <div style={{width : 150}}>
                                        <Card.Header className="text-uppercase font-weight-bold" style={{fontWeight:"bolder"}}>{product.category}</Card.Header>
                                        <div className="d-flex align-items-end justify-content-between">
                                            <Button className="mt-3" variant="primary">${product.price}</Button>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <button  type="button" onClick={handleCart} class="cart_btn btn btn-outline-success" >
                                                <FaShoppingCart />
                                            </button>
                                        </div>
                                        <div className="mt-3">
                                            <button type="button" class="btn btn-outline-danger">
                                                <IoTrash />
                                            </button>
                                        </div>
                                 
                                    </div>
                                </Card.Body>
                            </div>
                        </div>                  
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListProduct