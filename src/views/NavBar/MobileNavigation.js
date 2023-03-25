import NavLinks from "./NavLinks";
import styles from './NavBar.module.scss';
import {HiOutlineMenu} from 'react-icons/hi';
import {MdClose} from 'react-icons/md';
import {useState} from 'react';

const MobileNavigation = () => {
    const [open, setOpen] =useState(false);
    const hamburgerIcon = <HiOutlineMenu className={styles.hamburger} color='black' onClick={()=>setOpen(!open)}/>
    const closeIcon = <MdClose className={styles.hamburger} size='40px' color='black' onClick={()=>setOpen(!open)}/>
    const closeMobileMenu = () => setOpen(false);
    return (
        <nav className={styles.mobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    )
};

export default MobileNavigation;