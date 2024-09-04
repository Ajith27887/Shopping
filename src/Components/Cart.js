import React from "react";
import Button from "react-bootstrap/esm/Button";
import { BsFillHandbagFill } from "react-icons/bs";

const Cart = ({CartValueL}) =>{
    return(
        <>
            <div className="Cart">
                <Button variant="secondary">
                    <BsFillHandbagFill/>
                    {CartValueL}
                </Button>
            </div>
        </>
    )
}

export default Cart