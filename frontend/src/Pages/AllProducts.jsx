import React from "react";
import './CSS/Allproducts.css'
import all_product from "../Components/Assets/all_product";
import Item from '../Components/Item/Item'

const AllProducts = () => {
    return (
        <div className="products-title">
            <h1>All Products</h1>
            <hr/>
            <div className="products-container">
                {all_product.map((product, index) => (
                    <Item
                        key={index}
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        new_price={product.new_price}
                        old_price={product.old_price}
                    />
                ))}
            </div>
        </div>
    );
};


export default AllProducts