import React from 'react'
import { useDispatch } from 'react-redux'
import { getSearch } from '../../redux/shopping/actions'

interface Text{
  text: string
}

const SearchItem: React.FC<Text> = ({ text }) => {
  const dispatch = useDispatch()
  return (
    <div className="search-item" onClick={() =>
      dispatch(getSearch(text))
    }>
      {text}
    </div>
  )
}

export default SearchItem