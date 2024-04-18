
import React from 'react'
import AboutItem from '../components/AboutItem'
import Vector4 from '../assets/Vector/4.png'

export default function AboutUs() {
    return(
        <section id="about">
        <div className="container-fluid px-0">

            <div className="container mb-md-0 mt-5">
            <h1 className="heading-text au-text">About Us</h1>

            {/* Row 1 */}
            <img src={Vector4} alt="Vector4" className='Vector4' />
            <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
                <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card">
                
                    <AboutItem
                        q = "Who We Are: "
                        a = "We are a dedicated team focused on creating an intuitive platform for exploring and connecting with diverse profiles seamlessly."
                    />

                    <AboutItem
                        q = "Our Mission: "
                        a = "Our mission is to provide a user-friendly platform that simplifies profile exploration and fosters meaningful connections among individuals."
                    />

                    <AboutItem
                        q = "What We Do: "
                        a = "We develop and maintain an interactive profile viewer application that enables users to easily explore, connect with, and manage diverse profiles."
                    />

                    <AboutItem
                        q = "Why Choose Us ? "
                        a = "Choose us for our user-centric approach, seamless profile exploration features, and commitment to delivering an exceptional experience tailored to your needs."
                    />

                    <AboutItem
                        q = "Thank You "
                        a = "Thank you for choosing Explore to."
                    />

                    <AboutItem
                        q = "Contact Details:"
                        a = "Explore, Pune, India +910123456789."
                    />
                </div>
            </div>
            </div>

        </div>
        </section>
    )
}