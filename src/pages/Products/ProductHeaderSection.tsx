import React from 'react'
import { useDispatch } from 'react-redux';
import { getSearch } from '../../redux/shopping/actions';

const ProductHeaderSection = ({ text, search }: any) => {
  
  const dispatch = useDispatch()

  return (
    <h6
      onClick={() => dispatch(getSearch(search))}
      className="ProductHeaderSection"
    >
      {text}
    </h6>
  );
}

export default ProductHeaderSection