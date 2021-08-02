import {useState} from 'react'
import './navbar.scss'
// import { Link } from 'react-router-dom'
import { MdSearch,MdNotifications,MdArrowDropDown } from "react-icons/md";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset === 0 ? false: true);
        return () => (window.onscroll = null);
    }

    return (
        <div className={isScrolled ? 'navbar scrolled' : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <MdSearch className='icon' />
                    <span>Kid</span>
                    <MdNotifications className='icon' />
                    <img src="https://www.thewrap.com/wp-content/uploads/2021/05/gal-gadot-936x527.png" />
                    <div className="profile">
                        <MdArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar
