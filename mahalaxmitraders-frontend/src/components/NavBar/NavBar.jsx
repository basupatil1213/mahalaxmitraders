import React from 'react'
import logo from '../../resources/mt-logo.png';
import './NavBar.styles.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
    const [navbar, setNavbar] = React.useState(false);

    const handleMenuToggle = () => {
        setNavbar(!navbar);
    }
    const mobileNavbarCss = navbar ? ' mobile__nav__links shadow-2xl' : '';
    return (
        <>
            <nav className="h-screen-10 min-h-min grid lg:grid-cols-navbar md:grid-cols-navbar-tablet shadow-2xl">
                <div className="navbar col-start-2 flex items-center justify-start">
                    {/* logo */}
                    <img src={logo} alt="" className="h-screen-10" />
                </div>
                <div className={`navbar`}>
                    {/* links */}
                    <ul className={`navbar__links flex justify-around h-full items-center ${mobileNavbarCss}`}>
                        <li>
                            <a href="/" className="">Home</a>
                        </li>
                        <li>
                            <a href="/search">Catelogue</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar flex items-center justify-end gap-5">
                    {/* login */}
                    <ul className="">
                        <li>
                            <a href="/login" className="text-2xl md:text-base">Login</a>
                        </li>
                    </ul>
                    <div className="mobile__hamburger hover:cursor-pointer" onClick={handleMenuToggle}>
                        {navbar ? <CloseIcon /> : <MenuIcon />}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
