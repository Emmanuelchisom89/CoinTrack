import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Common/Header/Header'
import Loader from '../components/Common/Loader/Loader'
import { coinObject } from '../functions/convertObject'
import List from '../components/Dashboard/List/List'
import CoinInfo from '../components/Coin/CoinInfo/CoinInfo'
import { getCoinData } from '../functions/getCoinData'
import { getCoinPrices } from '../functions/getCoinPrices'
import LineChart from '../components/Coin/LineChart/LineChart'
import SelectDays from '../components/Coin/SelectDays/SelectDays'
import { setupChartData } from '../functions/setupChartData'
import TogglePriceType from '../components/Coin/PriceType/PriceType'
import Footer from '../components/Common/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const Coin = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [coinData, setCoinData] = useState([])
  const [days, setDays] = useState(7)
  const [chartData, setChartData] = useState({})
  const [priceType, setPriceType] = useState('prices');


  useEffect(() => {
    if (id) {
      getData();
    }

  }, [id])

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices) {
        setupChartData(setChartData, prices)
      setIsLoading(false)
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true)
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      setupChartData(setChartData, prices)
      setIsLoading(false)
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true)
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
    if (prices) {
      setupChartData(setChartData, prices)
      setIsLoading(false)
    }

  };



  return (
    <div className="page-container">
      <ToastContainer />
      <Header />
      {isLoading ? <Loader /> : <>
        <main className='content'>
        <div className="grey-wrapper">
          <List coin={coinData} />
        </div>
        <div className="grey-wrapper">
          <SelectDays
            days={days}
            handleDaysChange={handleDaysChange}
          />
          <TogglePriceType
            priceType={priceType}
            handlePriceTypeChange={handlePriceTypeChange}
          />
          <LineChart
            chartData={chartData}
            priceType={priceType}
          />
        </div>
        <CoinInfo
          heading={coinData.name}
          desc={coinData.desc}
          />
          </main>
        <Footer />
        </>}
      
    </div>
  )
}

export default Coin
