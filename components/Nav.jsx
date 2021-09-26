import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

import { FaBars } from "react-icons/fa";




export default function Nav() {
    return (

        <div className="navList">

            <nav className="navContent">
            
                <div className="logo">
                    <Image 
                    src='https://www.corebiz.ag/wp-content/uploads/2020/06/logo-corebiz-global.svg'
                    alt="Picture of the author"
                    width={125}
                    height={24}
                    />
                </div>
                <div className="nav-listContent">
                    <ul className="nav-list">
                        <li className="nav-list" ><Link href="https://www.corebiz.ag/pt/about"> a corebiz </Link></li>
                        <li className="nav-list" ><Link href="https://www.corebiz.ag/pt/#framework-title"> serviços  </Link></li>
                        <li className="nav-list" ><Link href="https://www.corebiz.ag/pt/cases"> cases     </Link></li>
                        <li className="nav-list" ><Link href="https://www.corebiz.ag/pt/contato"> contato   </Link></li>
                    </ul>
                </div>
                <div className="iconMobile">
                    <FaBars size='1.5em'/>
                </div>
        
                    
            </nav>
        </div>
    )
}