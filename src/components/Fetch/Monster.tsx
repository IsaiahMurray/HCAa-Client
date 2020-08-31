import React from 'react';
import axios from "axios";
const baseUrl = 'https://mhw-db.com';
const log = console.log;

function Monster(){
    axios.get(`${baseUrl}/monsters`)
        .then((res) => {
            log(res);
            log(res.data)
        })
        .catch((err) => log(err));

    return(
        <div>
             <h1>Monster Component</h1>
        </div>
    )
}

export default Monster;