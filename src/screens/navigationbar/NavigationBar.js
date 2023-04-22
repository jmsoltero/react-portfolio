import React from 'react';
import './navigationbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navigationLinks } from '../../helpers/navigation_links';

function createLinks(){
    return navigationLinks.map((e, idx) =>(
    <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

export default function NavigationBar() {
  return (
    <div id='home'>
        < Navbar className='navigation-container' 
        style={ {zIndex: '2', position: 'fixed', top: 0, width: '100%'}}
        collapseOnSelect
        expand='md'>
        <Navbar.Brand style={{ marginLeft:'1rem'}} href='#home'>Manuel Soltero</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse style={{ justifyContent:'flex-end', marginRight:'1rem', borderColor:'none'}}>
            <Nav className='links' styles={{ margin:'0 1rem'}}>
            {createLinks()}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}
