import React from 'react'
import SearchItem from './SearchItem'

const Trending = () => {
  return (
    <div className='trending'>
        <h6>Trending</h6>
        <div className="trending-list">
            <SearchItem text='Jumpsuits' />
            <SearchItem text='Dresses' />
            <SearchItem text='Kimonos' />
            <SearchItem text='Shorts'/>
            <SearchItem text='Tops' />
            <SearchItem text='Jackets' />
        </div>
    </div>
  )
}

export default Trending