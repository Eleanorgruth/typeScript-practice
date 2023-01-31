export const getQuote = () => {
  return fetch("https://api.goprogram.ai/inspiration")
    .then(res => res.json())
    // .then(data => data)
}