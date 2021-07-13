import React from 'react'
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/layout.css'
import '../styles/global.css'

export default function Layout({children}) {
    return (
        <div className ="app">
            < Navigation />
                <div >
                    {children}
                </div>
                <footer>
                    <p className="fixed-bottom">ⓒ 2021 Victacy</p>
                </footer>
            
        </div>
    )
}
