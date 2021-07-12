import React from 'react'
import Navbar from './Navbar'
import '../styles/layout.css'
import '../styles/global.css'

export default function Layout({children}) {
    return (
        <div className ="app">
            <Navbar/>
                <div >
                    {children}
                </div>
                <footer>
                    <p>ⓒ 2021 Victacy</p>
                </footer>
            
        </div>
    )
}
