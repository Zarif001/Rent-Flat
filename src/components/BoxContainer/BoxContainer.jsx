import React from 'react'
import './BoxContainer.scss'

export default function BoxContainer({children}) {
    return(
        <div className='container'>
            {children}
        </div>
    )
}