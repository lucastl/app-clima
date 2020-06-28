import React from 'react';
import './style.css';

const Error = ({mensaje}) => {
    return ( 
        <p className="error-message">{mensaje}</p>
     );
}
 
export default Error;