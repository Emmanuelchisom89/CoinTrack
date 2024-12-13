import React from 'react'
import Header from '../components/Common/Header/Header'
import Main from '../components/LandingPage/Main/Main'
import Footer from '../components/Common/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const Home = () => {
  return (
    <div className="home-container">
      <ToastContainer />
      <Header />
      <main className='content'>
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default Home
