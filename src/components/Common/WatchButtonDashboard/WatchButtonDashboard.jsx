import React, {useState, useEffect} from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Tooltip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { toast } from 'react-toastify';
import { addToWatchlist, removeFromWatchlist } from '../../../functions/watchlist';

const WatchButtonDashboard = ({ coin }) => {
    const [isWatchlisted, setIsWatchlisted] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setIsWatchlisted(watchlist.includes(coin.id));
  }, [coin.id]);
    
    
    const handleWatchlistToggle = (e) => {
        e.preventDefault();
    
        if (isWatchlisted) {
            const result = removeFromWatchlist(coin.id);
            if (result.success) {
                toast.info(`${coin.name} has been removed from the watchlist.`);
            } else {
                toast.warning(result.message);
            }
        } else {
            const result = addToWatchlist(coin.id);
            if (result.success) {
                toast.success(`${coin.name} has been added to the watchlist.`);
            } else {
                toast.warning(result.message);
            }
        }
        setIsWatchlisted(!isWatchlisted);

    }

    return (
              <Tooltip title={isWatchlisted ? "Remove from Watchlist" : "Add to Watchlist"} placement='bottom-end'> 

          <div className={`${coin.price_change_percentage_24h > 0
              ? "watchlist" : "watchlist-red"}`} onClick={handleWatchlistToggle}>
              
              {isWatchlisted
                    ?
                    <StarIcon />
                    :
                    <StarOutlineIcon />
              }
            </div>
            </Tooltip>
  )
}

export default WatchButtonDashboard
