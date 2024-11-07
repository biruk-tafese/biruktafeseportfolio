// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from '../../utils';

const Navbar = () => {

     
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Porfolio</a>
        <img className={styles.btn} src={getImageUrl('nav/menuIcon.png')} alt="menu-button" />
       
        <div className={styles.menu} >
            <ul className={styles.menuItems}>
               <li><a href='#About'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
               <li><a href='#projects'>Projects</a></li>
               <li><a href='#experience'>Expiernce</a></li>
                <li><a href='#education'>Education</a></li>
               <li><a href='#contact'>Contact me</a></li>
             </ul>
        </div>
    </nav>
  )
}

export default Navbar
