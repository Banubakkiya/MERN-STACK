import React from 'react';
import '../App.css';

const Card = ({src,title,description}) =>
{
    return(
        <div className='card1'>
            <div className='img'>
                <img src = {src} alt = {title}/>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};
export default Card;
