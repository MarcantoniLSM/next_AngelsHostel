'use client'

import './NavBarMobile.css'
import './NavBarDesktop.css'
import { useState } from 'react'

export default function NavBar(){

    const [menu, setMenu] = useState(0)

    const buttonClickHandle = () => {
        setMenu(prevMenu => {
            const newMenu = prevMenu === 1 ? 0 : 1;
            return newMenu;
        })
    }

    return(
        <nav>
            <img className={`${(menu === 1)?'left':'right'}`} src='./assets/images/logo_mob.svg' alt='Angels hotel logo'></img>
            <button onClick={buttonClickHandle}>
                <div className='div1'>
                    <div className='div2'/>
                    <div className='div2'/>
                    <div className='div2'/> 
                </div>
            </button>
            <ul className={`${(menu === 1)?'left':'right'}`}>
                <li><a href="">Home</a></li>
                <li><a href="">Hospedagens</a></li>
                <li><a href="">Serviços</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </nav>
    )
}