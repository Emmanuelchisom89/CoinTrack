import React from 'react'
import "./style.css"
import Button from '../../Common/Button/Button'
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import { toast } from "react-toastify";


import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Main = () => {
  const handleShare = () => {
      const APP_URL = "https://ap1s.net/Q1TF3";
    if (navigator.share) {
      navigator.share({
        title: "Crypto Dashboard",
        text: "Check out this amazing Crypto Dashboard made by Emmanuel Chisom!",
        url: APP_URL,
      })
        .then(() => toast.success("App Shared Successfully!"))
        .catch((err) => toast.error("Error sharing: " + err.message));
    } else {
      toast.warn("Sharing not supported on this device.");
    }
  };

  return (
      <div className='flex-info'>
          <div className='left-component'>
              <motion.h1
                className='t-c-h'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration: .5}}
              >
                Track Crypto
              </motion.h1>

              <motion.h1
                className='r-t-h'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration: .5, delay: .5}}
              >
                Real Time .
              </motion.h1>

              <motion.p
                className='info-text'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration: .5, delay: .75}}
              >
                Track crypto in real-time using a public API. Explore dashboard to get started!
              </motion.p>

              <motion.div
                className="btn-flex"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{duration: .5, delay: 1}}
              >
              
              <Link to={"/dashboard"}>
              <Button text={"Dashboard"} />
              </Link>
              
                <Button text={"Share App"} outlined={true} onClick={handleShare} />
            </motion.div>
          </div>

          <div className='right-component'>
              <motion.img
                src={iphone} alt="iphone" className='iphone'
                initial={{ y: -10 }}
                animate={{ y: 10 }}
                transition={{
                duration: 2,
                type: "smooth",
                repeatType: "mirror",
                repeat: Infinity
            }}


              />
              <img src={gradient} alt="gradient" className='gradient' />
          </div>
    </div>
  )
}

export default Main
