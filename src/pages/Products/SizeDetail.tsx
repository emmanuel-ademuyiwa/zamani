import React from 'react'

const SizeDetail = ({text}:any) => {
  return (
    <div className="size-detail">
      <p className="bold">Waist:</p>
          <p>{text }</p>
    </div>
  );
}

export default SizeDetail