import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header/Header'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import Loader from '../components/Common/Loader/Loader';
import WatchTabs from '../components/WatchList/WatchTabs/WatchTabs';
import Footer from '../components/Common/Footer/Footer';


const WatchlistPage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true) 
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    const fetchCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
          },
        });
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
      setIsLoading(false)
    };

    fetchCoins();
  }, []);

  // Filter coins based on watchlist IDs
  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    const filtered = coins.filter((coin) => storedWatchlist.includes(coin.id));
    setFilteredCoins(filtered);
  }, [coins]);

  return (
    <div className="page-container">
      <ToastContainer />
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
      <main className='content'>
      <WatchTabs coins={filteredCoins} />
      </main>
      )}
      <Footer />
    </div>
  );
};

export default WatchlistPage;
