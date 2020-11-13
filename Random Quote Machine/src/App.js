import Axios from "axios";
import { useState, useEffect } from "react";
import "./App.css"

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {

  const [currentQuote, setQuote] = useState({});
  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    if (clicked) {
      Axios.get("https://type.fit/api/quotes")
        .then(res => {
          const quoteIndex = randomIntFromInterval(0, res.data.length - 1);
          setQuote(res.data[quoteIndex])
          console.log(res.data.length)
        })
        .catch(err => {
          console.log(err);
        })
    }
    setClicked(false);
  }, [clicked])

  return (
    <div className="wrapper">
      {currentQuote.text}
      <br />
      <button onClick={() => setClicked(true)}>New Quote</button>
    </div>
  );
}

export default App;
