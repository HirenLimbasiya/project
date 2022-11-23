import React from 'react'
import { Link } from 'react-router-dom'

const Topics = () => {
    return (
        <>
            <div className='center-div'>
                <Link to="/addtopic"><button> Add Topic </button></Link>
            </div>
        </>
    )
}

export default Topics