import React, { useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./style.css"

const Search = ({ search, findCoin}) => {

  return (
    <div className='search'>
        <SearchRoundedIcon />
          <input type="text"
            placeholder='Search'
            value={search} onChange={(e) => findCoin(e)} />
    </div>
  )
}

export default Search
