
import React from 'react'

export default function AboutItem(props) {
    return(
        <div className='aboutus-item'>
            <h3 style={{fontSize: "1.15rem", fontWeight: "600"}}>Q. {props.q}</h3>
            <h3 style={{fontSize: "1.1rem", fontWeight: "400"}}>A. {props.a}</h3>
        </div>
    )
}

export function AboutContactItem(props) {
    return(
        <div className='aboutus-item'>
            <h3 style={{fontSize: "1.15rem", fontWeight: "600"}}>Q. {props.q}</h3>
            <div style={{ display: 'flex' }}>
            </div>
      
            <div style={{ display: 'flex', alignItems: 'center' }} className='aboutus-contact'>
                <a href="https://mohitjaiswal.com/" target='_blank' rel="noreferrer">
                    <img
                    src={props.sociallogomail}
                    alt="Mail"
                    style={{ maxWidth: '100%', width: "3rem" }}
                    />
                </a>
                <a href="https://mohitjaiswal.com/" target='_blank' style={{textDecoration: 'none', color: '#054169'}} rel="noreferrer">
                    <p style={{ margin: "0", paddingLeft: "1rem" }}>SmartPark</p>
                </a>
            </div>
      
            <div style={{ display: 'flex', alignItems: 'center' }} className='aboutus-contact'>
            <a href="https://mohitjaiswal.com/" target='_blank' rel="noreferrer">
                    <img
                    src={props.sociallogoinstagram}
                    alt="Mail"
                    style={{ maxWidth: '100%', width: "3rem" }}
                    />
                </a>
                <a href="https://mohitjaiswal.com/" target='_blank' style={{textDecoration: 'none', color: '#054169'}} rel="noreferrer">
                    <p style={{ margin: "0", paddingLeft: "1rem" }}>SmartPark</p>
                </a>
            </div>
        </div>
    )
}