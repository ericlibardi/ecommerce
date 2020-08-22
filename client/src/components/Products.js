import React, { Component } from 'react';

export default class Products extends Component {

    openModal () {
        const overlay = document.getElementById("overlayModule");
        overlay.classList.toggle('moduleVisible');
        overlay.classList.toggle('moduleInvisible');
    }

    render() {
        return (
            <div id="productsComponent">
                <div id="productsCompOverlay">
                    <img src={this.props.image} alt={this.props.name}></img>
                    <button onClick={() => this.openModal()}>Quick view</button>
                </div>
                <div id="productsComponentText">
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                </div>
            </div>
        )
    }
}
