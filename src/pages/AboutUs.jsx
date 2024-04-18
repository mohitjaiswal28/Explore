
import React from 'react'
import AboutItem, {AboutContactItem} from '../components/AboutItem'
import Instagram from '../assets/Social Logos/Instagram.png'
import Gmail from '../assets/Social Logos/Gmail.png'
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
                        a = "We are Koshish, your partner in educational data analysis and policy transformation."
                    />

                    <AboutItem
                        q = "Our Mission: "
                        a = "Reduce student dropout rates through data-driven insights and policy enhancements, ensuring equitable access to quality education for all."
                    />

                    <AboutItem
                        q = "What We Do: "
                        a = "Provide a powerful platform for educational data analysis, facilitating informed decisions and positive changes in the field of education.."
                    />

                    <AboutItem
                        q = "Why Choose Us ? "
                        a = "Our proven track record in empowering education through actionable insights, making a real difference in the lives of students and institutions."
                    />

                    <AboutItem
                        q = "Thank You "
                        a = "Thank you for choosing Koshish to make smarter educational decisions."
                    />

                    <AboutItem
                        q = "Contact Details:"
                        a = "Koshish, Pune, India +910123456789."
                    />

                    <AboutContactItem
                        q = "Contact Us ?"
                        sociallogomail = {Gmail}
                        sociallogoinstagram = {Instagram}
                    />
                </div>
            </div>
            </div>

        </div>
        </section>
    )
}