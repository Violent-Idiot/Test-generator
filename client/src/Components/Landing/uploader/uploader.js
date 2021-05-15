import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './uploader.module.css';
import { motion } from 'framer-motion';

const Uploader = ()=>{

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    return(
        <div style={{width:"77%",}}>
            <motion.div {...getRootProps()} 
                className={isDragActive? styles.dropBoxA:styles.dropBoxO}
                initial={{scale:0,opacity:0}}
                animate={{scale:1,opacity:1}}
                exit={{scale:0,opacity:0,transition:{duration:0.3}}}
            >
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </motion.div>
            <motion.div 
                className={styles.buttonContainer}
                initial={{opacity:0}}
                animate={{opacity:1,transition:{delay:0.3}}}
                exit={{opacity:0,transition:{duration:0.4}}}
            >
                <motion.button whileHover={{scale:1.03,transition:{duration:0.1}}}>
                    UPLOAD
                </motion.button>
            </motion.div>            
        </div>
    )
}

export default Uploader;