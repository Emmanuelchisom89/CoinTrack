import React from 'react'
import Header from '../components/Common/Header/Header'
import Main from '../components/LandingPage/Main/Main'
import Footer from '../components/Common/Footer/Footer'

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <main className='content'>
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default Home
