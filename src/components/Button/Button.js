"use client"; 
import "./style.css"; 

const Button = ({ children, action, type="classic" }) => {
    return (
        <button type={type} onClick={action} className={`btn btn-${type} m-2`}>
            {children}
        </button>
    );
}

export default Button;