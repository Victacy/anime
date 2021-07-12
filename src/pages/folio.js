import React from 'react'
import Layout from '../components/Layout'
import {StaticImage } from 'gatsby-plugin-image'

export default function Portfolio() {
    return (
        <Layout>
        <div>
            <h1>Portfolio</h1>
            <div>
            <StaticImage src="../../static/favicon.ico"  width={300} quality={95}
                 alt="A Gatsby astronaut" style={{ marginBottom: `1.45rem` }} />
            <h4>A blog app created using figma.This blog app was also coded that is only the frontend using react js.</h4>
            </div>
        </div>
        </Layout>
    )
}
