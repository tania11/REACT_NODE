import React from 'react';
import Banner from './Banner';
import Title from './Title';
import {Link} from 'react-router-dom';
import ButtonContainer from './Button';

export default function Home(props) {
    return (
        <>
            <section className="banner-container">
                <Banner image='images/home.jpg'>
                    <Title name="Luxurious Rooms" />
                    <p>Delux rooms starting at $399</p>
                    <Link to='/rooms'>
                        <ButtonContainer>OUR ROOMS</ButtonContainer>
                    </Link>
                </Banner>
            </section>
        </>
    )
}