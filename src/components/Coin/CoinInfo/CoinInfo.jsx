import React, { useState } from 'react'
import "./style.css"

const CoinInfo = ({ heading, desc }) => {
    const fullText = desc + `<p style="color: var(--grey)"> Read Less...<p/>`
    const breifText = desc.slice(0, 300) + "..." + `<p style="color: var(--grey)"> Read More...<p/>`

    const[view, setView] = useState(false)
    
  return (
      <div className='grey-wrapper coinInfo'>
          <h2>{heading}</h2>

          {desc.length > 150 ? (
              <p
                className='coin-info-desc'
                onClick={() => setView(!view)}    dangerouslySetInnerHTML={{ __html: !view ? breifText : fullText }} />
            ) : (
                <p
                className='coin-info-desc'
                   dangerouslySetInnerHTML={{ __html: desc}} />
            )
            
        }
      
    </div>
  )
}

export default CoinInfo
