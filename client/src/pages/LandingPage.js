import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Products from '../components/Products';
import Modal from '../components/Overlay';

import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { fetchProducts } from '../store/actions/productAction'

import divider from '../images/curves.jpg'
import tshirt from '../images/tshirtImg.jpg'
import shirt from '../images/shirtImage.jpg'
import dress from '../images/dressImg.jpg'
import pants from '../images/pantsImg.jpg'
import square from '../images/squaregray.png'

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchProducts();
    }
     
    render() {
        return (
            <div>
                <div id="header">
                    <Fade bottom cascade>
                        <div id="contentHeader">
                            <h3>Summer Collection</h3>
                            <h1>Clothes made to fit you.</h1>
                            <div id="headbutton">
                                <form action="/about" method="get">
                                    <button>Learn More</button>
                                </form>
                                <form action="/" method="get">
                                    <button>Shop Now</button>
                                </form>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div id="belowHeader">
                    <Fade left duration={2000}>
                        <p>Liss & Pep wants to proof that style can also mean comfort.</p>
                    </Fade>
                    <img src={divider} alt='divider'/>
                    <Fade right duration={2000}>
                        <p>Recently stablished to provide the world comfortable and stylish clothes.<br/>
                        We bread that beach style.</p>
                    </Fade>
                </div>
                <div id="categoriesMozaic">
                    <div id="mozaic-left" >
                        <div className="mozaicbox1">
                            <img src={pants} alt="pants" />
                            <div className="mozaiccontent">
                                <h5>Pants</h5>
                                <p>Comfortable and stylish pants</p>
                                <form action="/" method="get">
                                    <button>Shop Now</button>
                                </form>
                            </div>
                        </div>
                        <div className="mozaicbox2">
                            <div className="mozaicbox2Items">
                                <img src={tshirt} alt="tshirt" />
                                <div className="mozaiccontent">
                                    <h5>T-shirts</h5>
                                    <p>Comfortable and stylish T-shirts</p>
                                    <form action="/" method="get">
                                        <button>Shop Now</button>
                                    </form>
                            </div>
                            </div>
                            <div className="mozaicbox2Items">
                                <img src={shirt} alt="shirt" />
                                <div className="mozaiccontent">
                                    <h5>Shirts</h5>
                                    <p>Comfortable and stylish shirts</p>
                                    <form action="/" method="get">
                                        <button>Shop Now</button>
                                    </form>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="mozaicbox3">
                        <img src={dress} alt="dress" />
                        <div className="mozaiccontent">
                            <h5>Dresses</h5>
                            <p>Comfortable and stylish dresses</p>
                            <form action="/" method="get">
                                <button>Shop Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="landClothesSection">
                        <div id="landClothesTitle">
                            <h4>Best Selling clothes</h4>
                            <p>Some of our stylish and loved apparels.</p>
                        </div>
                        <div className="landClothesGroup">
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                        </div>
                        <div className="landClothesGroup">
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>   
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                        </div>
                        <div className="landClothesGroup">
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                            <Products image={square} name="dress1" price="$100" className="productLandPage"/>
                        </div>
                    </div>
                </div>
                {<Modal></Modal>}
            </div>
        )
    }
}

LandingPage.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    // userLogedin: PropTypes.func.isRequired,
    // logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: state.products.items,
    // user: state.user.items
})

export default connect(mapStateToProps, { fetchProducts })(LandingPage);