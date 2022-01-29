import React from "react";
import "./CardWidget.css";
<script defer src="/your-path-to-fontawesome/js/all.js"></script>;

function CardWidget () {
    return (
        <div className="carrito">
            <img  src="https://image.flaticon.com/icons/png/512/107/107831.png" alt="carrito" width={30} ></img>
           {/* <i class="fas fa-shopping-cart" alt="logo" width={30} /> */}
        </div>
        
        
    )
}
export default CardWidget;