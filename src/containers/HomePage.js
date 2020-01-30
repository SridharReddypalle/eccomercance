import React, { Component } from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Products from '../components/Products'
import SpecialOffer from '../components/SpecialOffer'
import Footer from '../components/Footer'

export default class HomePage extends Component {
    render() {
        return (
            <div>
            <Header/>
            <Slider/>
            <Products/>
            <SpecialOffer/>
            <Footer/>
            </div>
        )
    }
}
