"use client"; 
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, text, icon }) => {
    return (
        <div className="m-3 p-5 card">
            {icon && (
                <div className="card-icon-wrapper mb-3">
                    <FontAwesomeIcon icon={icon} size="lg" />
                </div>
            )}
            <h3 className="text-classic">{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Card;