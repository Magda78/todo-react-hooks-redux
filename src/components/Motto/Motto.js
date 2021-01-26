import React, { useState, useEffect } from 'react';
import './Motto.css';

function Motto() {
    const [quote, setquote] = useState('')
    useEffect(() => {
        const fetchMotto = async () => 
        await fetch ('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => {
            setquote(data[Math.floor(Math.random() * data.length)].text)
            console.log(data)
        })
        fetchMotto();
    },[])
    return quote
}

export default Motto;
