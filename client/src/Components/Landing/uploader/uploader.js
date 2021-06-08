import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './uploader.module.css';
import { motion } from 'framer-motion';

const Uploader = (props)=>{

    
    const {
        setFile,
        handleSubmit,
        setText,
        text,
        setLoader
    } = props;



    const onDrop = useCallback(acceptedFiles => {
        //setFile(acceptedFiles[0]);
        //setExt(acceptedFiles[0]);
        setLoader(true);
        const formData = new FormData();

        formData.append("file", acceptedFiles[0]);
        
        fetch("https://testpapergenerator.herokuapp.com/filetotext", {
        method: "POST",
        body: formData,
        })
        .then((result) => {
            result.json().then((res) => {
            var txt = res.data;
            console.log(txt);            
            setText(txt);
            setLoader(false)
            });
        })
        .catch((error) => {
            console.error("Error:", error);
            setLoader(false);
        });



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
                    <p>Upload PDF</p>
                }
            </motion.div>
            <motion.div 
                className={styles.textpreview}
                initial={{scale:0,opacity:0}}
                animate={{scale:1,opacity:1}}
                exit={{scale:0,opacity:0,transition:{duration:0.3}}}
            >
                <textarea 
                    value={text} 
                    onChange={e=>{setText(e.target.value)}}
                    placeholder={isDragActive? "the text will be extracted from the file" :"enter text to generate questions"}
                >
                </textarea>
            </motion.div>
            <motion.div 
                className={styles.buttonContainer}
                initial={{opacity:0}}
                animate={{opacity:1,transition:{delay:0.3}}}
                exit={{opacity:0,transition:{duration:0.4}}}
            >
                <motion.button whileHover={{scale:1.03,transition:{duration:0.1}}} onClick={handleSubmit} disabled={!text}>
                    GENERATE QUESTIONS
                </motion.button>
            </motion.div>            
        </div>
    )
}

export default Uploader;