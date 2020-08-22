import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Form from 'react-bootstrap/Form'

import square from '../images/squaregray.png'

export default class Overlay extends Component {



    
componentDidMount() {

        window.onclick = function(event) {
            if (event.target.className === 'moduleVisible') {
            const overlay = document.getElementById("overlayModule");
            overlay.classList.toggle('moduleVisible');
            overlay.classList.toggle('moduleInvisible')
            }
        }
    
    };
    


    render() {
        return (
            <div id="overlayModule" className="moduleInvisible">
                <div id="overlayBlock">
                    <div id="overlayCarousel">
                        <Carousel
                            showArrows={false}
                            showStatus={false}
                            showIndicators={false}>
                            <div>
                                <img src={square} alt='square' />
                            </div>
                            <div>
                                <img src={square} alt='square' />
                            </div>
                            <div>
                                <img src={square} alt='square' />
                            </div>
                        </Carousel>
                    </div>
                    <div id="overlayHeader">
                        <h4>Product Name</h4>
                        <i class="fas fa-times"></i>
                        <p>$100,00</p>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
