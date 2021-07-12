import React from 'react'
import Layout from '../components/Layout'

export default function Contact() {
    return (
        <Layout>
        <div>
            <h1>Contact me</h1>
            <h5>Subscribe to my youtube channel to receive updates and design tips to 
                guide you as you begin your design career or as you have already began 
                your desgin career</h5>
        <form>
            <label>Name : 
            <input type="text" name="name" id="name"/>
            </label>
            <br/>
            <label>Email Address : 
            <input type="email" name="email" id="email" />
            </label>
            <br/>
            <label>Message :
            <textarea type="text" name="Message" id="message" placeholder="Type something ..." rows="7" style={{height:`200px`,width:`500px`}}></textarea>
            </label><br/>
            <br/>
            <button type="submit">Subscribe</button>
            <input type="reset" value="Clear"/>
        </form>
        </div>
        </Layout>
    )
}
