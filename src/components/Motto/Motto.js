import React, { useState, useEffect } from 'react';
import './Motto.css';

function Motto() {
    const [quote, setquote] = useState([])
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    useEffect(() => {
        const fetchMotto = async () => 
        await fetch ('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => {
            const randomObject = (data[Math.floor(Math.random() * data.length)])
            setquote(Object.values(randomObject));
            setTitle(randomObject[0]);
            setAuthor(randomObject[1])
        })
       
        fetchMotto();
    },[])
    console.log('quote', quote)
    return quote
}

export default Motto;
