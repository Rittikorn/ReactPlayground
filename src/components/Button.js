import { useState } from "react";

function Button({ color, text }) {
    const [amount, setAmount] = useState(0);

    function handleStock() {
        setAmount(amount + 1);
    }

    return (
        <>
            <button className='btn' style={{ backgroundColor: color }} onClick={handleStock}>{text} ({amount})</button>
        </>
    )
}

Button.defaultProps = {
    color: '#ffffff',
    text: 'Click'
}

export default Button;