import React from 'react';
import styled from 'styled-components';

export default function Room({room}) {
    return (
        <RoomStyled className="room-wrapper">
            <div className='room-img-container'>
                <img src={room.image}  alt='default Image' />
                <div className='discount-wrapper'>
                    <div className="discount">{room.discount} discount</div>
                </div>
            </div>
            <div className='room-content'>
                <div className="rating-accomodation">
                    <div className="rating">
                        <div className="rating-outer">
                            <span style={{fontSize:'24px', color:'#ff9800'}}>&#9734;</span>
                            <span style={{fontSize:'24px', color:'#ff9800'}}>&#9734;</span>
                            <span style={{fontSize:'24px', color:'#ff9800'}}>&#9734;</span>
                            <span style={{fontSize:'24px', color:'#ff9800'}}>&#9734;</span>
                            <span style={{fontSize:'24px', color:'#ff9800'}}>&#9734;</span>
                            <div className="rating-inner" style={{width: `${
                                    ((ratings)=> {
                                        let ratingSum = ratings.reduce((s,r) => s+r.ratings,0);
                                        console.log(`${(ratingSum/(5*ratings.length))*100}%`);
                                        return `${(ratingSum/(5*ratings.length))*100}%`;
                                    })(room.customerReviewRating)
                                }` 
                            }}>
                                <span style={{fontSize:'24px', color:'#ff9800'}}>&#9733;</span>
                                <span style={{fontSize:'24px', color:'#ff9800'}}>&#9733;</span>
                                <span style={{fontSize:'24px', color:'#ff9800'}}>&#9733;</span>
                                <span style={{fontSize:'24px', color:'#ff9800'}}>&#9733;</span>
                                <span style={{fontSize:'24px', color:'#ff9800'}}>&#9733;</span>
                            </div>
                        </div>
                    </div>
                    <div className="rooms-accomodate">
                        <img style={{width:'19px', height: '19px', marginRight:'5px'}} src='images/person.png' />
                        <span>{room['accomodation']['adults']}</span>
                        <span style={{padding:' 0px 5px'}}>|</span>
                        <span>{room.rooms} Room{`${room.rooms > 1 ? `s` : ``}`}</span>
                    </div>
                </div>
                <p className="room-name">{room.name}</p>
                <p className="room-type">{room.roomType}</p>
                <div className="rating-details-rent">
                <div className="rating-details">
                        <span>{(room.customerReviewRating.reduce((s,r) => s+r.ratings,0) / (room.customerReviewRating.length)).toFixed(1)}/5</span>
                        <p style={{fontStyle: 'italic',fontSize: '13px',color: 'olivedrab',paddingTop: '7px'}}>{room.customerReviewRating.length} ratings</p>
                    </div>
                    <div className='room-rent-total'>
                        <p className='mrp' style={{textDecoration: 'line-through',fontSize:'19px'}}>{room.rent}</p>
                        <div className='flexbox-row'><div className='dollar'>&#8377;</div><div style={{fontSize: '23px',fontWeight: 'bold'}}>{(room.rent - (((+room.discount.substring(0, room.discount.length -1))/100 )* room.rent)).toFixed(2)}</div></div>
                        {/* <span>{room.discount}</span> */}
                    </div>
                </div>
                <div className="refund">
                    {room.cancellation.cancellationTip}
                </div>
            </div>
        </RoomStyled>
    )
}

const RoomStyled = styled.div`
        display: grid;
        grid-template-columns: 200px auto;
        // place-items: center;
        grid-gap: 5px;
        .room-img-container{
            position:relative;
            .discount-wrapper{
                position: absolute;
                top: -7px;
                left: -7px;
                width: 100%;
                overflow: hidden;
                height: 100%;
                .discount{ 
                       // filter: drop-shadow(7px 4px 6px black);
                        background: #F44336;
                        position: absolute;
                        width: 100%;
                        top: 0;
                        left: 0;
                        transform: rotateZ(-45deg) translate(-65px,-32px);
                        right: 0;
                        z-index: 10;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 27px;
                        font-size: 12px;
                        color: #fff;
                        font-style: oblique;
                        font-family: cursive;
                }
            }
        }
        img{
            width:100%;
            height:200px;
        }
        .room-content{
            justify-self:stretch;
            padding-left:20px;
            position:relative;
            overflow:hidden;
            .refund{
                left:100%;
                color:red;
                font-weight:600;
                white-space:nowrap;
                overflow:hidden;
                position: absolute;
                font-size: 13px;
                bottom: 0;
                font-style: italic;
                animation-name: refundmessage;
                animation-duration: 10s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }
            .room-rent-total{
                text-align:right;
                .mrp{
                    text-decoration: line-through;
                    font-style: italic;
                    opacity: 0.3;
                    font-weight: bold;
                }
                }
            }
            .room-name{
                font-size: 22px;
                text-transform: capitalize;
                letter-spacing: 2.2px;
                font-weight: 600;
            }
            .room-type{
                text-transform: uppercase;
                font-size: 13px;
                font-weight: 600;
                color: #4CAF50;
            }
        }
        .rating{
            width:99px;
            .rating-outer{
                position:relative;
                .rating-inner {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    overflow: hidden;
                    width: 61%;
                }
            }
        }
        .rating-accomodation{
            display:flex;
            justify-content:space-between;
            .rooms-accomodate{
                justify-content: space-between;
                font-size: 15px;
                opacity: 0.7;
                font-weight: 600;
                display:flex;
                align-items:center;
            }
        }
        .rating-details{
            &>span {
                background: #009688;
                padding: 2px 7px;
                border-radius: 6px;
                color: #fff;
                font-size: 15px;
                font-weight: 600;
            }
        }
        .rating-details-rent{
            margin-top:48px;
            display:flex;
            justify-content:space-between;
            align-items:flex-end;
        }
        .dollar{
            width: 24px;
            height: 24px;
            font-size: 21px;
            background: #009688;
            margin: 0px 6px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
        }
        .discount-wrapper::before{
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            border-top: 8px solid transparent;
            border-right: 8px solid #795548;
            border-bottom: 1px solid #795548;
            border-left: 8px solid transparent;
            left: 71px;

        }
        .discount-wrapper::after{
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            border-top: 8px solid transparent;
            border-right: 8px solid #795548;
            border-bottom: 0px solid #795548;
            border-left: 8px solid transparent;
            top: 79px;
            left: -9px;
        }

    @keyframes refundmessage{
        0%{
            left:100%;
        }
        25%{
            left:50%
        }
        50%{
            left: 0;
        }
        75%{
            left:-50%;
        }
        100%{
            left:-100%
        }
    }
    @media only screen and (max-width: 480px) {
        .room-wrapper{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }
       
        img{
            width:100%;
            height:100%;
        }
    }
`;