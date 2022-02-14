import React from 'react';
import "./NotFound.css";
import image from "../Components/images/404.jpg"

export default function NotFound() {
    return (
        <div className="notFound">
            <img src={image} alt="Item not found" />
            <h1>Item Not Found</h1>
        </div>);
}
