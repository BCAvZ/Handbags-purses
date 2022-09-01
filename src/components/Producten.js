import React from "react";

const Producten = ({label, picture, name, price}) => {
 return (
    <>
        <article>
            <span>{label}</span>
            <img src={picture} alt="bag"/>
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    </>
 )
}

export default Producten;
