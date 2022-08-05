import React from 'react'

interface Text{
  text: string
}

const SearchItem: React.FC<Text> = ({text}) => {
  return (
    <div className="search-item">
      {text}
    </div>
  )
}

export default SearchItem