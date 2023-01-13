import React, {useState, useEffect} from "react"
import './quoteapi.css'


const QuoteApi = () =>{
    const[quotes, setQuotes]=useState("");
    const getQuote = ()=>{
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
            let randomNum = Math.floor(Math.random() * data.length);
            setQuotes(data[randomNum]);
    });
};
useEffect(()=>{
    getQuote();
}, []);

    return(
        <div className="App">
            <div className="quote">
                <p>{quotes.text}</p>
                <p>{quotes.author}</p>
                <div className="btnContainer">
                    <button onClick={getQuote} className="btnQuote">Get Quote</button>
                    
                </div>
            </div>
        </div>
    );
};
export default QuoteApi;