import React from 'react'
import './_heroSection.scss'
import { Button } from 'reactstrap';

const HeroSection = () => {
    return (
        <div class="heroImage">
            <div class="heroText">
                <h1>Gurella Security Force</h1>
                <p>First of All, SECURITY</p>
                <Button color="success">Learn More</Button>{''}
            </div>
        </div>
    )
}

export default HeroSection
