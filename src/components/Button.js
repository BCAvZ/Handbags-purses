import React from 'react';




function Button ({ text, disable }) {
    const logClick = () => {
        console.log({text}.text)
    }
    return (
        <>
            <button disabled={ disable } type="button" onClick={logClick}> {text} </button>

        </>

    )
}

export default Button;