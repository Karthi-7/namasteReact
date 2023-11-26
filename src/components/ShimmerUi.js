import React from 'react'

function ShimmerUi() {
  return (
    <div className='shimmer'>
    {
        Array(10).fill("").map((item,i)=>(
            <div className='shimmerui' key={i}>
            </div>
        ))
    }
      
    </div>
  )
}

export default ShimmerUi
