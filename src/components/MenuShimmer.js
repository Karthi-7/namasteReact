import React from 'react'

function MenuShimmer() {
  return (
    <div>
          <div className='menu_shimmer'>
    {
        Array(10).fill("").map((item,i)=>(
            <div className='shimmerui_menu' key={i}>
            </div>
        ))
    }
      
    </div>
    </div>
  )
}

export default MenuShimmer
