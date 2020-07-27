import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
        <nav className="navbar container-fluid">
            <div className="navbar-wrapper flex-grow-1 align-items-center justify-content-between">
                <div className="navbar-brand">
                    <button type="button" >PREMIUM RESORTS</button>
                </div>
                <ul className="navbar-items">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/rooms">Rooms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cartlist">My Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/wishlist">Wish List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/bookinglist">Bookings</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}