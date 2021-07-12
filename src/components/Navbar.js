import React from 'react'
import {Link} from 'gatsby'
import '../styles/navbar.css'


export default function Navbar() {
    return (
        <div className="face">
            <div className="links">
                <h1 style={{textAlign:`left`,color:`white`}}>Platinum</h1>
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/folio">Portfolio</Link>
                <Link to ="/contact">Contact</Link>
            </div>
        </div>
    )
}
