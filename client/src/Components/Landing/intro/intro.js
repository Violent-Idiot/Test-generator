import React from 'react';
import styles from './intro.module.css';
import {motion, AnimatePresence} from 'framer-motion';
import arrow from '../../../Assets/arrow.svg';
import { Link } from 'react-router-dom';

const Intro = ()=>{


    return(
        <motion.div>
            <motion.div 
            className={styles.intro}
            initial={{opacity:0}}
            animate={{opacity:1,transition:{
              duration:0.6
            }}}
            exit={{opacity:0,transition:{duration:0.4}}}
          >
            <h1>
              Test<br/>Paper<br/>Generator
            </h1>
            <p>
              Our system generates questions based on the pdf that you have uploaded. Just upload your pdf and voila you now have questions
            </p>
          </motion.div>
          <motion.div 
            className={styles.buttonContainer}
            initial={{x:-300,opacity:0}}
            animate={{x:0,opacity:1,transition:{delay:0.3}}}
            exit={{x:-800,opacity:0,transition:{duration:0.4}}}
          >
            <Link to="/home/upload">
              <button>
                LETS GET STARTED
                <img src={arrow}/>
              </button>
            </Link>
          </motion.div>
        </motion.div>
    )
}

export default Intro;