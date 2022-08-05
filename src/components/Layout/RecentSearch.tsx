import React from 'react'
import SearchItem from './SearchItem'

const RecentSearch = () => {
  return (
    <>
      <div className="recent-search">
      <div className="recent-container">
        <h6>Recent Search</h6>
      </div>
      <h6 className='light'>Clear All</h6>
    </div>

    <SearchItem text="Tops" />
    </>
)
}

export default RecentSearch