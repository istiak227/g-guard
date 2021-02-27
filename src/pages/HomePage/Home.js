import React from 'react'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection'
import './_home.scss'





const Home = () => {
        return (
            <div>
                <Header />
                <HeroSection />
                <div className="aboutUs">
                    <div className="aboutUseContent">
                        <h2>About Gurella Force</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            

        )
}

export default Home