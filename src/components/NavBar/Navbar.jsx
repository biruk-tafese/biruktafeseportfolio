// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <ul className= {styles.top}>
      <li>+25164377216</li>
      <li>cstafesebiruk23@gmail.com</li>
      <li>www.github.com/biruk-tafese</li>
    </ul>
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
       {"<"}
        <img  className={styles.logo} src={getImageUrl("hero/myImage.png")} alt="logo" />
        {"/>"}
      </a>
      
      <div className={styles.menu}>
        <img 
          className={styles.menuBtn}
          src={showMenu ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')}
          alt="menu-button"
          onClick={() => setShowMenu(!showMenu)}
        />

        <ul 
          className={`${styles.menuItems} ${showMenu && styles.menuOpen}`} 
          onClick={() => setShowMenu(false)}
        >
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
