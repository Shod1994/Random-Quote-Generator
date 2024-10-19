import { useState } from 'react'
import  quotesDisplay from './QuoteData'




 function QuoteGen(){
    const [quotes, setQuotes] = useState('')

    const randomQuotes = () => {
        const shuffleQuotes = Math.floor(Math.random() * quotesDisplay.length)
        return quotesDisplay[shuffleQuotes]
    }

    const handleGenerateQuote = () => {
        setQuotes(randomQuotes());
    }
 

    return (
        <div> <div className="background"></div>
            <div className="container">
                <div className="display">
                    <h1>See Quote Here:</h1>
                    <p>{quotes}</p>
                </div>
                <div>
                    <button className="quote-btn" type="button" onClick={handleGenerateQuote}>Random Quote</button>
                </div>

            </div>
            <footer>
                <small>✍️Created By Lashod Jones✍️</small>
            </footer>


        </div>
    )
}

export default QuoteGen;
