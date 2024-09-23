//Files in archive/Vaibhavi are not being used for the main website !!! 

import React from "react";
import "./App.css";
import ImageComponent from "./ImageComponent";


const lines=[
        'Association of Computer Engineering Students is',
        'the departmental club of Department of Computer',
        'Engineering at Dr. D. Y. Patil Institute of Technology,',
        'Pimpri'

];


const WRW =() =>{
    return(
        <div className="heading">
            <h1>WHO ARE WE</h1>
            <div className="paragraph-container">
                {lines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
            </div>
            <ImageComponent /> 

        </div>
        
    );
};



export default WRW;
