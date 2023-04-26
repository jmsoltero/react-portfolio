import React from 'react'
import './contactMe.css'
import { navigationLinks } from '../../helpers/navigation_links'

function createLinks() {
    return navigationLinks.map((e,idx) => (
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}

function ContactMe() {
  return (
    <div className='contactMe_container' id='contact'>
        <div className='contactMe_data_links'>
            <div>
                <p>Mexico,MX.</p>
                <p>Manuel Soltero</p>
                <p>email@email.com</p>
            </div> 
            <div>
                {createLinks()}
            </div>

        </div>
        <div style={{textAlign: 'center '}}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe