import React, {useState} from "react"
import './quoteapi.css'


const QuoteApi = () =>{
    const[quotes, setQuotes]=useState('');
    const getQuote = ()=>{
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => console.log(data));
    }
    return(
        <div className="App">
            <button onClick={getQuote}>Get quote</button>
        </div>
    );
}
export default QuoteApi;