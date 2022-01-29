import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = () => {
    const [counter, setCounter] = useState(1);
    const stock = 5;

    const incrementar = () => {
        if(counter < stock)
        setCounter(counter + 1);
        else{
            alert("Has llegado al limite de productos en stock");
        }
    } 
    const decrementar = () => {
        if(counter>1)
        setCounter(counter -1); 

    }



  return(
   <div className="contador">       
        <p className="par">{counter}</p><br/>
        <button onClick={incrementar} >Incrementar</button>
        <button onClick={decrementar} >Decrementar</button>
  </div>
  )
};

export default ItemCount;
