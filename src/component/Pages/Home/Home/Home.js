import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import BMI from '../BMI/BMI';
import Footer from '../../../Shared/Footer/Footer';
import Moto from '../Moto/Moto';
import ViewService from '../ViewService/ViewService';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <BMI></BMI>
            <Moto></Moto>
            <ViewService></ViewService>
            <Footer></Footer>
        </div>
    );
};

export default Home;