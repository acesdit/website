import React from "react";
import Image from "./image.svg";
import "./App.css";

const ImageComponent=()=>{
    return (
        <div className="image-container">
            <img src={Image} alt="test" className="custom-image"/>
        </div>
    );
};

export default ImageComponent;