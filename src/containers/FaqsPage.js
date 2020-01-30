import React, { Component } from 'react'
import Header from '../components/Header'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default class FaqsPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Faq/>
                <Footer/>
            </div>
        )
    }
}
