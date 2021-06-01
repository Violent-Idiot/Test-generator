import React from 'react';
import styles from './Header.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
 
const Header = (props)=>{
    const {setQuestions} = props;
    return(
        <div className={styles.Nav}>
            <div className={styles.logoContainer}>
                <p id={styles.heading1}>Quizify</p>
            </div>
            <div className={styles.navBar}>
                <ul>
                    <motion.li whileHover={{scale:1.04}}><Link className={styles.heading2} to='/home' onClick={()=>{setQuestions(null)}}>Home</Link></motion.li>
                    <motion.li whileHover={{scale:1.04}}><Link className={styles.heading2}>About Us</Link></motion.li>
                </ul>
            </div>
        </div>
    )
}

export default Header;