import React from 'react'
import Navigation from '../components/navigation.js';
import '../styles/style.css'
import '../styles/contactus.css'

const ContactUs = (props) => {
    return (
        <div>
            <div className="container-other-page">
                <Navigation isActiveContact={true} />
                <section className="page-content" >
                    <div className="page-content-article">
                        <div className="contact-us-content">
                            <h1>Contact Us</h1>
                            <input type="text" placeholder="Name" width="400" height="100" /><br/>
                            <input type="text" placeholder="Email" width="400" height="100" /><br/>
                            <textarea type="text" placeholder="Questions"></textarea><br/>
                            <button className="send">Send > </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContactUs;
