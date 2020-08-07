import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div id="productsComponent">
                <div id="productsCompOverlay">
                    <img src={this.props.image} alt={this.props.name}></img>
                    <form action="/" method="get">
                        <button>Quick view</button>
                    </form>
                </div>
                <div id="productsComponentText">
                    <p>{this.props.name}</p>
                    <p>{this.props.price}</p>
                </div>
            </div>
        )
    }
}
