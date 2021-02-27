import React from 'react'
import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainContent'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection'
import './_home.scss'


/* import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg' */



const Home = () => {
        return (
            <div>
                <Header />
                {/* <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src={img1} className="sliderimg" alt=""/>
                    <img src={img2} className="sliderimg" alt=""/>
                    <img src={img3} className="sliderimg" alt=""/>
                </AliceCarousel> */}
                <HeroSection />
                <MainContent />
                <Footer />
            </div>
            

        )
}

export default Home