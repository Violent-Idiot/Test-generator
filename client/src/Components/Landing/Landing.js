import react, { useEffect, useState } from 'react'
import classes from "./Landing.module.css";
import axios from "axios";

const Landing = ()=>{

    const [file,setFile] = useState(null);
    const [text,setText] = useState(null);



    useEffect(()=>{console.log(file)},[file])

/*
    fetch('http://127.0.0.1:5000/upload').then(
        res=>console.log(res)
    )
*/


        const handleSubmit = ()=>{

        const formData = new FormData();

        formData.append('name', 'abc123');
        formData.append('file', file);

        fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData
        })
        .then(result => {
            result.json().then(
                res => setText(res.data)
            )
        })
        .catch(error => {
        console.error('Error:', error);
        });

    }



    return(
        <div data-testid="Landing">
            <input type="file" onChange={(file)=>{setFile(file.target.files[0])}} />
            <button onClick={handleSubmit}>submits</button>
            {text&& <p>{text}</p>}
        </div>
    )
}

export default Landing;