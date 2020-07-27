import React from 'react';
import rooms from '../data';
import styled from 'styled-components';
import Room from './Room';
import Title from './Title';


export default function Rooms(props) {
    let arr = ['','big' , 'horizontal', 'vertical', 'x-horizontal'];
    return (
        <>
            <ImageContainer className="images-grid-container">
                {
                    rooms.map((item, index) => 
                    (<div key={`grid_image ${index}`} className={`image-content-wrapper ${arr[0 |(Math.random()*3)]}`}>
                        <div className="img-container">
                            <img src={item.image} alt='Beach Resort' />
                            <div className="resort-title-container">
                            <span>{item.name}</span>
                            </div>
                        </div>
                    </div>)
                    )
                }
            </ImageContainer>
            <Title name='All Rooms' color='#000000' />
            <RoomsContainer className="rooms-container">
                {
                    rooms.map(room => <Room key={room.hotelId} room ={room}/>)
                }
            </RoomsContainer>
        </>
    )
}
// h-${Math.floor(Math.random() * 3)}  w-${Math.floor(Math.random() * 3)}
const RoomsContainer = styled.div`
    margin-top:70px;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-rows: 200px;
    grid-gap: 30px 60px;
`;


const ImageContainer = styled.div`
    margin: 0px -15px 30px;
    height:60vh;
    overflow:hidden;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 100px;
    grid-gap:2px;
    grid-auto-flow: dense;
    .image-content-wrapper {
        .img-container {
            width: 100%;
            height: 100%;
            overflow:hidden;
            position:relative;
            img {
                object-fit: cover;
                object-position: center;
                width: 100%;
                height: 100%;
                transform: scale(1.0);
                transition: all .5s ease-in-out;
            }
            .resort-title-container {
                position: absolute;
                top: -100%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: top .5s ease-in-out;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                backdrop-filter: saturate(5) blur(10px);
                height: 100%;
                span {
                    color: #fff;
                    font-weight: bold;
                    font-size: 2vh;
                    text-transform: uppercase;
                }
            }
        }
        &:hover img{
            transform: scale(1.5);
        }

        &:hover .resort-title-container {
                top:50%;
            }
        }
    }

    .w-1 {
        grid-column: span 1;
    }
    .w-2 {
        grid-column: span 2;
    }
    .w-3 {
        grid-column: span 3;
    }
    .w-4 {
        grid-column: span 4;
    }
    .w-5 {
        grid-column: span 5;
    }
    .w-0 {
        grid-column: span 6;
    }

    
    .h-2 {
        grid-row: span 3;
    }
    .h-3 {
        grid-row: span 4;
    }
    .h-4 {
        grid-row: span 5;
    }
    .h-5 {
        grid-row: span 6;
    }

    .big{
        grid-row: span 2;
        grid-column: span 2;
    }

    .horizontal {
        grid-row:span 2;
        grid-column: span 3;
    }

    .vertical {
        grid-column:span 2;
        grid-row: span 3;
    }

    .x-horizontal {
        grid-row:span 1;
        grid-column: span 3;
    }

    @-moz-document url-prefix() {
        .image-content-wrapper:hover img{
            filter: blur(10px);
        }
    }
`