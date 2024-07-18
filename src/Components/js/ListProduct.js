import { useContext } from "react";
import {ProductContext} from "../../API/fetchApi";
import './ListProduct.css'
// import { Link } from "react-router-dom";

const ListProduct = () =>{
    const {items} = useContext(ProductContext)
    console.log(items,"asds");

    return (
        <div>
            <h1>Product List</h1>
            <div className="container">
                <div className="row">
                    {items.map((product) => (
                        <div to={product.id} className="col-lg-4 col-md-6 col-12" key={product.id}>
                            <img className="img-fluid" src={product.image} ></img>
                            <div>
                                <h6>{product.title}</h6>
                                <p>{product.price}</p>
                            </div>
                        </div>  
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListProduct