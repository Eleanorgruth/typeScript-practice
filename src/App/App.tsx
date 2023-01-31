import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuote } from '../apiCalls';
import { Quote } from '../interfaces';
import { Box, Container } from '@mui/system';

const App = () => {
  const [quote, setQuote] = useState<Quote>({
    quote: "quote.",
    author: "author"
    })

  useEffect(() => {
    getQuote()
      .then(data => setQuote(data))
  }, [])

  return (
    <main className="App">
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', 'textAlign':'center', marginTop: '20vh'}}>
          {quote.quote} -{quote.author}
        </Box>
      </Container>
    </main>
  );
}

export default App;
