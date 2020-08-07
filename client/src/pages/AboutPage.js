import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

import aboutImg2 from '../images/aboutImg2.jpg'
import aboutImg3 from '../images/aboutImg3.jpg'

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <div id="aboutHeader">
                    <h1>Welcome to Liss & Pep</h1>
                </div>
                <div id="aboutCompany" className="aboutSection">
                    <img src={aboutImg2} alt="about Img 2"></img>
                    <Fade bottom cascade>
                        <div className="aboutSectionText">
                            <h3>Comfortable & Classy</h3>
                            <p>We were inspired by the classic clothes, but intrigued to also desing comfortable pieces.
                            Feel awsome with our clothes without having to compromise your comfort.
                            </p>
                        </div>
                    </Fade>
                </div>
                <div id="aboutOrigin" className="aboutSection">
                    <Fade bottom cascade>
                        <div className="aboutSectionText">
                            <h3>Proudly Portuguese</h3>
                            <p>Born in this inspiring city, with its sunny beaches and beautiful tiles, we brought this air to our brand.
                            </p>
                        </div>
                    </Fade>
                    <img src={aboutImg3} alt="about Img 3"></img>
                </div>
            </div>
        )
    }
}
