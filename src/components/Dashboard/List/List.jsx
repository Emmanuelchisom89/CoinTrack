import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { motion } from 'framer-motion';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumbers';
import WatchButtonDashboard from '../../Common/WatchButtonDashboard/WatchButtonDashboard';


const List = ({ coin }) => {

  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
        <td className="td-image">
              <img src={coin.image} alt={coin.id} className='coin-logo' />              
        </td>
          
        <td>
            <td className='name-sec'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name.length > 25 ? coin.name.slice(0,25) + "..." : coin.name}</p>
            </td>

        </td>
          
        <Tooltip title="Price Change In 24 hrs" placement='bottom-start'>
        <td className="chip-flex chip-mt">
                <div className={coin.price_change_percentage_24h > 0 ?"price-chip" : "price-chip-red"}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className={`${coin.price_change_percentage_24h > 0
                    ? "icon-chip" : "icon-chip-red"} td-icon`}>
                  {coin.price_change_percentage_24h > 0
                    ?
                    <TrendingUpIcon />
                    :
                    <TrendingDownIcon />
                  }
              </div>
        </td>
        </Tooltip>


        <Tooltip title="Current Price" placement='bottom-start'>
        <td>
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
        </td>
        </Tooltip>

        <Tooltip title="Total Volume" placement='bottom-start'>
        <td className='desktop-vol'>
            <p className="total-volume">{coin.total_volume.toLocaleString()}</p>
        </td>
          </Tooltip>
          
        <Tooltip title="Total Volume" placement='bottom-start'>
        <td className='mobile-vol'>
            <p className="total-volume">{convertNumber(coin.total_volume)}</p>
        </td>
        </Tooltip>

        <Tooltip title="Market Cap" placement='bottom-start'> 
        <td className='desktop-td-mkt'>
            <p className="total-volume">${coin.market_cap.toLocaleString()}</p>  
        </td>
        </Tooltip>
          
        <Tooltip title="Market Cap" placement='bottom-start'> 
        <td className='mobile-td-mkt'>
            <p className="total-volume">${convertNumber(coin.market_cap)}</p>  
        </td>
        </Tooltip>

          <td className="chip-flex chip-mt" id='watchlist'>
          <WatchButtonDashboard coin={coin} />
        </td>

      </tr>
    </Link>

  )
}

export default List
