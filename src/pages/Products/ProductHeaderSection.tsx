import React from 'react'

const ProductHeaderSection = ({text}:any) => {
  return <h6 onClick={()=>console.log('clicked')} className="ProductHeaderSection">{text}</h6>;
}

export default ProductHeaderSection