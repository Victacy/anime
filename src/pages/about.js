import React from 'react'
import {Link} from 'gatsby'
import '../styles/abt.css'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'

export default function About() {
    return (
        <Layout>
        <div>
            <h1>About me</h1>
            <h4>My name is Eunice Adorkor,a designer with almost 2 years experience.My skills range from 
                graphic design to UIUX.I focus on bringing out a very beautiful and unique design which is 
                appealing to the user.I am always looking for other creative people and designs to connect 
                with and help to improve my skills.Design is not always aboutwhat you see but understanding 
                the concept behind what you see in your own knowledge
                <br/>
                <br/>Connect with me here:
            </h4>
            <Link to=""><button type="submit" className="insta">Instagram</button></Link>
            <Link to=""><button type="submit" className="twit">Twitter</button></Link>
            <Link to=""><button type="submit" clasName="face">Facebook</button></Link>
            <StaticImage src="../../static/favicon.ico" width={300} quality={95}
             alt="A Gatsby astronaut" style={{ marginBottom: `1.45rem` }} />
        </div>
        </Layout>
    )
}
