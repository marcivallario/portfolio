import { Email } from "react-obfuscate-email";
import { useRef, useEffect, useState } from 'react';
import '../styles/header.css'

function Header() {
    const toggleRef = useRef();
    const menuRef = useRef();
    const submenuRef = useRef();
    const [ toggle, setToggle ] = useState(null);
    const [ menu, setMenu ] = useState(null);
    const [ submenu, setSubmenu ] = useState(null);

    useEffect(() => {
        setToggle(toggleRef.current);
        setMenu(menuRef.current);
        setSubmenu(submenuRef.current)
    }, []);

    /* Toggle mobile menu */
    function toggleMenu() {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            menu.classList.add("active");
            toggle.querySelector("a").innerHTML = `<i class="fas fa-times"></i>`;
        }
    }

    /* Activate Submenu */
    function toggleItem() {
        if (submenu.classList.contains("submenu-active")) {
            submenu.classList.remove("submenu-active");
            toggleMenu();
        } else if (menu.querySelector(".submenu-active")) {
            menu.querySelector(".submenu-active").classList.remove("submenu-active");
            submenu.classList.add("submenu-active");
            toggleMenu();
        } else {
            submenu.classList.add("submenu-active");
        }
    }

    return (
        <header>
            <nav>
                <ul className="menu" ref={menuRef}>
                <li className="item"><a href="/">Home</a></li>
                <li className="item has-submenu" onClick={toggleItem} ref={submenuRef}>
                    <a id="about-submenu" tabIndex="0">About</a>
                    <ul className="submenu">
                        <li className="subitem"><a href="/about#about">Bio</a></li>
                        <li className="subitem"><a href="/about#skills">Skills</a></li>
                    </ul>
                </li>
                <li className="item"><a href="/projects">Projects</a></li>
                <li className="item"><a href="https://dev.to/marcivallario" target="_blank">Blog</a></li>
                <li className="item"><Email 
                        email="marcival615@gmail.com"
                        subject="Let's Connect!"
                        >
                        Contact
                    </Email></li>
                <li className="toggle" ref={toggleRef} onClick={toggleMenu}><a><i className="fas fa-bars"></i></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;