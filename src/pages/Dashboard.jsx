import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/Header'
import Tabs from '../components/Dashboard/Tabs/Tabs'
import Search from '../components/Dashboard/Search/Search'
import PaginationControlled from '../components/Dashboard/Pagination/Pagination'
import Loader from '../components/Common/Loader/Loader'
import BackToTop from '../components/Common/BackToTop/BackToTop'
import { getCoins } from '../functions/getCoins'
import Footer from '../components/Common/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [coins, setCoins] = useState([])
    const [paginatedCoins, setPaginatedCoins] = useState([])
    const [search, setSearch] = useState("")
    const [page, setPage] = React.useState(1);
    const [isLoading, setIsLoading] = useState(true)

    const handlePageChange = (event, value) => {
        setPage(value);
        let prevIndex = (value - 1) * 10;
        setPaginatedCoins(coins.slice(prevIndex, prevIndex + 10))
  };


    const findCoin = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    let filteredCoins = coins.filter(
        (item) => item.name.toLowerCase().includes(search.toLowerCase())
        || item.symbol.toLowerCase().includes(search.toLowerCase()))
    
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const myCoins = await getCoins();
        if (myCoins) {
            setCoins(myCoins)
            setPaginatedCoins(myCoins.slice(0, 10))
            setIsLoading(false)
        }
    }

    return (
        <>
            <ToastContainer />
            <Header />
            <BackToTop />
            {isLoading ? (
                <Loader />
            ) : (
          <div>
          <Search
            search={search}
              findCoin={findCoin}
          />
          <Tabs coins={search ? filteredCoins : paginatedCoins} />

            {!search && (
                <PaginationControlled
                    page={page}
                    handlePageChange={handlePageChange}
                />
            )}
            
            <Footer />
         </div>
         )}           
        </>
    )
}

export default Dashboard
