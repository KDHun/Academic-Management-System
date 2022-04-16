import React, { Component } from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'
import Image from '../components/Image'
export class Home extends Component {
  render() {
    
    return (
      <div>
          <Header />
          <Image />
          <Footer />
      </div>
    )
  }
}

export default Home
