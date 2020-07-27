import React from 'react';
import './App.css';
import Room from './components/Room';
import Rooms from './components/Rooms';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartList from './components/CartList';
import WishList from './components/WishList';
import BookingList from './components/BookingList';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <section className="container-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="rooms/:id" component={Room} />
            <Route exact path="/wishlist" component={WishList} />
            <Route exact path="/cartlist" component={CartList} />
            <Route exact path="/bookinglist" component={BookingList} />
          </Switch>
        </section>
          <Footer/>
        </div>
    </>
  );
}

export default App;
