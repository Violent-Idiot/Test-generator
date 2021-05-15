import React from 'react';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
 
const Header = ()=>{
    return(
        <div className={styles.Nav}>
            <p id={styles.heading1}>Quizify</p>
            <motion.p whileHover={{scale:1.04,textShadow:"0px 0px 2px #fff"}}><Link className={styles.heading2}>Home</Link></motion.p>
            <motion.p whileHover={{scale:1.04,textShadow:"0px 0px 2px #fff"}}><Link className={styles.heading2}>About Us</Link></motion.p>
        </div>
    )
}

export default Header;