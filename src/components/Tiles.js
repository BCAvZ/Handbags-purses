import React from "react";

const Tiles = ({tilesPic, title, content}) => {

    if (tilesPic) {
        return (
            <>
                <img src={tilesPic} alt="tiles"/>
            </>
        )
    } else {
        return (
            <>
                <h2> {title} </h2>
                <p> {content}</p>
            </>
        )
    }
}

export default Tiles;
