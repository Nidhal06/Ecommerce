import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const splitText = (text, maxLength) => {
        if (text.length > maxLength) {
            const firstLine = text.substring(0, maxLength);
            const secondLine = text.substring(maxLength);
            return `${firstLine} \n${secondLine}`;
        }
        return text;
    };
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link>
            <p>{splitText(props.name, 25)}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    TND{props.new_price}
                </div>
                <div className="item-price-old">
                    TND{props.old_price}
                </div>
            </div>
        </div>
    )
}
export default Item