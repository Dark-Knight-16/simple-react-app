import './Nav.css'
import { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    const [sidebar, setSidebar] = useState(false)

    return (
        <div className="header">
            <div className="logo">
                <h1>
                    Dark <span> Knight</span> 
                </h1>
            </div>
            <nav>
                <button className="toggle" onClick={() => { setSidebar(!sidebar) }}>
                    {sidebar ? <ClearIcon /> : <DehazeIcon /> }
                </button>
                <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => { setSidebar(false) }}>
                    <li>
                        <NavLink to="/" >Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="about" >About</NavLink>
                    </li>

                    <li>
                        <NavLink to="contact" >Contact</NavLink>
                    </li>

                    <li>
                        <NavLink to="services" >Services</NavLink>
                    </li>

                    <li>
                        <NavLink to="blog" >Blog</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}