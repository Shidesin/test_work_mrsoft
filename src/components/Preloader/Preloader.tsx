import React from 'react';
import './preloaderStyles.css'

export const Preloader = () => {
    return(
        <div className="cssload-thecube">
            <div className="cssload-cube cssload-c1"/>
            <div className="cssload-cube cssload-c2"/>
            <div className="cssload-cube cssload-c4"/>
            <div className="cssload-cube cssload-c3"/>
        </div>
    )
}