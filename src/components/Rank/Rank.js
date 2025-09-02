import React from 'react'
import "./Rank.css"


function Rank({name,entries}) {
  return (
    <div className='rank'>
        <div className='rank-title'>
            {`${name}, your current entry count is...`}
        </div>
        <div className='rank-entries'>{entries}</div>
    </div>
  )
}

export default Rank