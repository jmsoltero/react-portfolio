import React from 'react';
import DevIcon from 'devicon-react-svg';
import './tech.css'
import { Techno } from '../../helpers/techno';

function Tech() {
  return (
    <div className='technologies__container' id='technologies'>
    <div>
        <h1 style={{textAlign:'center'}}>TECHNOLOGIES</h1>
    </div>
    <div className='tech_cards_container'>
    {Techno.map((e,idx)=> {
        return (
            <div key={idx} className='tech__card'>
                < DevIcon className='tech_icons' icon={e.iconName} />
                <span style={{margin:'5px', fontSize:'1.5rem'}}>{e.name}</span>
            </div>
        )})}
    </div>
    </div>
  )
}

export default Tech