import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Form from 'react-bootstrap/Form';

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

    addRemoveQuantity (operator) {
        const test = document.getElementById('counter').querySelector('input');

        if (test.value < 2 && operator === "-") {
            return
        }

        if (operator === '+') {
            test.value = ++test.value
        } else {
            test.value = --test.value
        }    
    }
    


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
                        <div id="overlayHeaderFirst">
                            <h4>Product Name</h4>
                            <i className="fas fa-times"></i>
                        </div>
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
                        <div id="counter">
                            <button type="button" onClick={this.addRemoveQuantity.bind(this, '-')} data-count="-"> - </button> 
                            <input type="number" min="1" max="10" />
                            <button type="button" onClick={this.addRemoveQuantity.bind(this, '+')} data-count="+"> + </button> 
                        </div>
                        <div id="overlayButtons">
                            <button>Add to Cart</button>
                            <button>Buy it Now</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
            </div>
        )
    }
}
