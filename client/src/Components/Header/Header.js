import React from 'react';
import styles from './Header.module.css';

const Header = ()=>{
    return(
        <div className={styles.Nav}>
            <p id={styles.heading1}>Group name</p>
            <p id={styles.heading2}>Home</p>
            <p id={styles.heading2}>About Us</p>
        </div>
    )
}

export default Header;