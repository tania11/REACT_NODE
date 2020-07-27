import React from 'react';
import styled from 'styled-components';

export default function Bannner(props) {
    return (
        <>
            <BannerStyled className="banner row flex-column">
                <img className="banner-img" src={props.image} alt="" />
                <div className="banner-content">
                    {props.children} Hello
                </div>
            </BannerStyled>
        </>
    )
}

const BannerStyled = styled.div`
    height: 60vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .banner-img{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
   
    .banner-content{
        backdrop-filter:saturate(5) blur(10px);
        color: #ffffff;
        font-size: 1.3rem;
        padding: 20px;
        position: relative;
        width: 50%;
        height: auto;
        background: rgba(0,0,0,0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`