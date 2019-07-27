import React from 'react'
import { Link } from 'react-router-dom'

const Sleep = () => {
    return (
        <div>
            <h3>Activities</h3>
            <div>
                <Link to="/appointment">Appointment</Link>
                <Link to="/bath">Bath</Link>
                <Link to="/measurement">Measurement</Link>
            </div>
        </div>
    )
}
export default Sleep
