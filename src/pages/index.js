import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import '../styles/global.css'

export default function Index() {
  return (
    <Layout>
    <div>
      <h1>Platinum Portfolio page</h1>
      <h3>Designs aim to bring out the best ideas 
        of the viewer to life.Join me as i display 
        unique and beautiful designs that will give 
        the best experience yet</h3>
      <button type="submit" className="but"> Follow</button>
      <StaticImage src="../../static/favicon.ico" width={300} quality={95}
       alt="A Gatsby astronaut" style={{ marginBottom: `1.45rem` }} />
    </div>
    </Layout>
  )
}
