import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/Header'
import SelectCoins from '../components/Compare/SelectCoin/SelectCoins'
import SelectDays from '../components/Coin/SelectDays/SelectDays'
import { ToastContainer } from 'react-toastify'
import TogglePriceType from '../components/Coin/PriceType/PriceType'
import List from '../components/Dashboard/List/List'
import CoinInfo from '../components/Coin/CoinInfo/CoinInfo'
import Loader from '../components/Common/Loader/Loader'
import LineChart from '../components/Coin/LineChart/LineChart'
import { coinObject } from '../functions/convertObject'
import { getCoinPrices } from '../functions/getCoinPrices'
import { getCoinData } from '../functions/getCoinData'
import { setupChartData } from '../functions/setupChartData'
import Footer from '../components/Common/Footer/Footer'

const Compare = () => {
  const [coin1, setCoin1] = useState("bitcoin")
  const [coin2, setCoin2] = useState("ethereum")
  const [coin1Data, setCoin1Data ] = useState({})
  const [coin2Data, setCoin2Data] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [priceType, setPriceType] = useState('prices')
  const [chartData, setChartData] = useState({})
  const [days, setDays] = useState(7)

  const handleDaysChange = async (e) => {
    setIsLoading(true)
    setDays(e.target.value)
    const prices1 = await getCoinPrices(coin1, e.target.value, priceType);
    const prices2 = await getCoinPrices(coin2, e.target.value, priceType);
    setupChartData(setChartData, prices1, prices2)
    setIsLoading(false)
  }

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true)
    setPriceType(newType);
    const prices1 = await getCoinPrices(coin1, days, newType);
    const prices2 = await getCoinPrices(coin2, days, newType);
    setupChartData(setChartData, prices1, prices2)
    setIsLoading(false)

  };


  useEffect(() => {
    getData()
  }, [])

  
/*   useEffect(() => {
  let isMounted = true;

  const fetchData = async () => {
    if (isMounted) {
      await getData();
    }
  };

  fetchData();

  return () => {
    isMounted = false;
  };
}, []);

 */  
  const getData = async () => {
  try {
    setIsLoading(true);

    const data1 = await getCoinData(coin1);
    const data2 = await getCoinData(coin2);

    if (data1 && data2) {
      coinObject(setCoin1Data, data1);
      coinObject(setCoin2Data, data2);

      const prices1 = await getCoinPrices(coin1, days, priceType);
      const prices2 = await getCoinPrices(coin2, days, priceType);

    if (prices1 && prices2) {
        setupChartData(setChartData, prices1, prices2);
      } else {
        console.error("Failed to fetch valid price data:", { prices1, prices2 });
      }
    }
  } catch (error) {
    console.error("Error in getData:", error);
  } finally {
    setIsLoading(false);
  }
  };
  

  const handleCoinChange = async (e, isCoin2) => {
  setIsLoading(true); // Start loader
  const selectedCoin = e.target.value;

  try {
    if (isCoin2) {
      setCoin2(selectedCoin);
      const data = await getCoinData(selectedCoin);
      coinObject(setCoin2Data, data);
      const prices1 = await getCoinPrices(coin1, days, priceType);
      const prices2 = await getCoinPrices(selectedCoin, days, priceType);
      setupChartData(setChartData, prices1, prices2); // Update chart
    } else {
      setCoin1(selectedCoin);
      const data = await getCoinData(selectedCoin);
      coinObject(setCoin1Data, data);
      const prices1 = await getCoinPrices(selectedCoin, days, priceType);
      const prices2 = await getCoinPrices(coin2, days, priceType);
      setupChartData(setChartData, prices1, prices2); // Update chart
    }
  } catch (error) {
    console.error("Error in handleCoinChange:", error);
  } finally {
    setIsLoading(false); // Stop loader
  }
};
  

  return (
    <div>
      <ToastContainer />
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
      <>
      <div className="coin-days-flex">
      <SelectCoins
        coin1={coin1}
        coin2={coin2}
        handleCoinChange={handleCoinChange}
      />
      <SelectDays
        days={days}
          handleDaysChange={handleDaysChange}
          noPTag={true}
        />
      </div>
      <div className="grey-wrapper">
        <List coin={coin1Data} />
      </div>
      <div className="grey-wrapper">
        <List coin={coin2Data} />
      </div>
            
      <div className="grey-wrapper">
        <TogglePriceType
          priceType={priceType}
          handlePriceTypeChange={handlePriceTypeChange}
        />
        <LineChart
          chartData={chartData}
          priceType={priceType}
          multiAxis={true}
        />
      </div>
      
      <CoinInfo
        heading={coin1Data.name}
        desc={coin1Data.desc}
      />
      <CoinInfo
        heading={coin2Data.name}
        desc={coin2Data.desc}
      />
      
      <Footer />
    </>
    )}
    </div>
  )
}

/* export default React.memo(Compare);
 */

export default Compare