import React from 'react'
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { motion } from 'framer-motion';
import WatchButton from '../../Common/WatchButton/WatchButton';



const WatchGridItem = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}>
        <div className="info-flex">
          <div className="main_info_flex">
           <img src={coin.image} alt={coin.id} className='coin-logo' />   
           <div className='name-sec'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name.length > 25 ? coin.name.slice(0,25) + "..." : coin.name}</p>
            </div>
          </div>
          
          <WatchButton coin={coin} />
        </div>
        
        <div className="chip-flex">
                <div className={coin.price_change_percentage_24h > 0 ?"price-chip" : "price-chip-red"}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className={coin.price_change_percentage_24h > 0
                    ? "icon-chip" : "icon-chip-red"}>
                  {coin.price_change_percentage_24h > 0
                    ?
                    <TrendingUpIcon />
                    :
                    <TrendingDownIcon />
                  }
              </div>
          </div>

          <div className="price-info-div">
            <motion.h4
                initial={{ opacity: 1 }}
                animate={{ opacity: .5 }}
                  transition={{
                    duration: 1,
                    type: "smooth",
                    repeatType: "mirror",
                    repeat: Infinity
                }}
                  className={coin.price_change_percentage_24h > 0 ? 'coin-price' : "coin-price-red"}>${coin.current_price.toLocaleString()}
            </motion.h4>
              <p className="total-volume">Total Volume : {coin.total_volume.toLocaleString()}</p>

              <p className="total-volume">Market Cap : ${coin.market_cap.toLocaleString()}</p>
          </div>
    </div>
   
    </Link>
  )
}

export default WatchGridItem
