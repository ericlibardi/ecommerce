import React, { Component } from 'react';

import Logo from '../images/cover.png'
import tshirt from '../images/tshirtImg.jpg'
import shirt from '../images/shirtImage.jpg'
import dress from '../images/dressImg.jpg'
import pants from '../images/pantsImg.jpg'

export default class Navbar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            navbarBottom: false,
        }
        this.updateNavBar = this.updateNavBar.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateNavBar)
    }

    updateNavBar() {
        var x = document.getElementById("navbar")
        if (document.documentElement.scrollTop > 30 || this.state.navbarBottom === true) {
            x.className = "navScrolled"
        } else {
            x.className = "navStationary"
        }
    }

    openBottomNav () {
        var navBarTop = document.getElementById("navbar")
        const shopIcon = document.querySelector("i");
        const navbarBottom = document.getElementById("navbarBottom");
        
        if (this.state.navbarBottom === false) {
        navBarTop.className = "navScrolled"
        navbarBottom.className = "navbarBottomOpen"
        shopIcon.style.transform = "rotate(180deg)"
        this.setState({
            navbarBottom: true
        })
        } else {
            document.documentElement.scrollTop <= 30 ? navBarTop.className = "navStationary" : navBarTop.className = "navScrolled";
            navbarBottom.className = "navbarBottomClosed"
            shopIcon.style.transform = "rotate(0deg)"
            this.setState({
            navbarBottom: false
        })
        }
    }


    render() {
        return (
            <div>
                <div id="navbar" className="navStationary">
                    <div>
                        <img src={Logo} alt="Logo Liss & Pep"></img>
                    </div>
                    <div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <div id="navbarShopGroup">
                                <li onClick={() => {this.openBottomNav()}}><p>Shop</p>
                                <i className="fas fa-angle-down"></i>
                                </li>
                            </div>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </div>
                    <div id="navbarIcons">
                        <i className="fas fa-shopping-cart"></i>
                        <i className="far fa-user"></i>
                    </div>
                </div>
                <div id="navbarBottom" className="navbarBottomClosed">
                    <div className="navbarBottomImg">
                        <img src={shirt}/>
                        <p>Shirts</p>
                    </div>
                    <div className="navbarBottomImg">
                        <img src={dress}/>
                        <p>Dresses</p>
                    </div>
                    <div className="navbarBottomImg"> 
                        <img src={pants}/>
                        <p>Pants</p>
                    </div>
                    <div className="navbarBottomImg">
                        <img src={tshirt} />
                        <p>T-shirts</p>
                    </div>
                </div>
            </div>
        )
    }
}
