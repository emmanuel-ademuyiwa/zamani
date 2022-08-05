import React from 'react'
import SearchItem from './SearchItem'

const Trending = () => {
  return (
    <div className='trending'>
        <h6>Trending</h6>
        <div className="trending-list">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
        </div>
    </div>
  )
}

export default Trending