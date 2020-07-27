import React from 'react';

export default function Title({name, color}) {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h1  style={{color: color ? `${color}`: `#fff` }} className="title-heading">{name}</h1>
                <div style={{width: '56px',height: '5px',background: color ? `${color}`: `#fff` }}></div>
            </div>
        </>
    )
}