import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuote } from '../apiCalls';
import { Quote } from '../interfaces';

const App = () => {
  const [quote, setQuote] = useState<Quote>({
    quote: "quote.",
    author: "author"
    })

  useEffect(() => {
    getQuote()
      .then(data => {
        console.log(data)
        setQuote(data)
      })
  }, [])

  return (
    <main className="App">
      <h1>
        {quote.quote}
      </h1>
      <h2>by: {quote.author}</h2>
    </main>
  );
}

export default App;
