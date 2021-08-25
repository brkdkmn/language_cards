import React from "react";
import "./Card.css";
import { categories } from "../helper/Data"
import Item from "../Item/item";


const Card = () => {
    return(
        <>
        <div className="cards-area-container">
            <h4 className="language-title">Languages</h4>
            <div className="cards-container">
            {categories.map((catElt,index) => {
                return <Item card={catElt}
                            key={index}/>
            })}
        </div>
        </div>
        </>
    )
}

export default Card;