import React, { useState, useEffect } from 'react';
import './Motto.css';

function Motto() {
    const [quote, setquote] = useState([])
    useEffect(() => {
        const fetchMotto = async () => 
        await fetch ('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => {
            const randomObject = (data[Math.floor(Math.random() * data.length)])
            setquote(Object.values(randomObject));
        })
       
        fetchMotto();
    },[])
    return quote
}

export default Motto;
