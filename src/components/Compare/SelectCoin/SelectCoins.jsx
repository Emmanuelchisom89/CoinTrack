import React, { useEffect, useState } from 'react'
import "./style.css"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { getCoins } from '../../../functions/getCoins'

const SelectCoins = ({ coin1, coin2, handleCoinChange }) => {

  const [allCoins, setAllCoins] = useState([])

  const styles = {
    height: "2.5rem",
    fontSize: ".9rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
      borderColor: "#3a80e9",
      },
    },

  }


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const myCoins = await getCoins()
    setAllCoins(myCoins)
  }

  return (
    <div className='coin-flex'>
      <div className="coin-flex-div">
      <p>Crypto 1</p>
      <Select
          sx={styles}
          value={coin1}
          label="coin1"
          onChange={(e) => handleCoinChange(e, false)}
          
      >
        {allCoins.filter((item) => item.id != coin2).map((coin, i) => (
          <MenuItem key={i} sx={{ maxWidth: 120}} value={coin.id}>{coin.name}</MenuItem>
        ))}
        </Select>
        </div>

      <div className="coin-flex-div">
      <p>Crypto 2</p>
      <Select
          sx={styles}
          value={coin2}
          label="coin2"
          onChange={(e) => handleCoinChange(e, true)}
          
      >
        {allCoins.filter((item) => item.id != coin1).map((coin, i) => (
          <MenuItem key={i} sx={{ maxWidth: 120, fontSize: ".9rem"}} value={coin.id}>{coin.name}</MenuItem>
        ))}
        </Select>
      </div>

    </div>
  )
}

export default SelectCoins
