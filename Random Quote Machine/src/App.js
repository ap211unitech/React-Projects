import Axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {

  const [style, setStyle] = useState("");
  const [currentQuote, setQuote] = useState({});
  const [clicked, setClicked] = useState(true);

  useEffect(() => {
    if (clicked) {
      Axios.get("https://type.fit/api/quotes")
        .then(res => {
          const quoteIndex = randomIntFromInterval(0, res.data.length - 1);
          setQuote(res.data[quoteIndex])
          setStyle(`rgb(${randomIntFromInterval(0, 255)},${randomIntFromInterval(0, 255)},${randomIntFromInterval(0, 255)})`);
        })
        .catch(err => {
          console.log(err);
        })
    }
    setClicked(false);
  }, [clicked])


  return (
    <div className="content" style={{ backgroundColor: style }}>
      <div className="wrapper">
        <div className="quoteBox">
          <div className="quoteText">
            {/* <FontAwesome className="fa fa-quote-left fa-5x"></FontAwesome> */}
            <span id="text" style={{ color: style }}>
              {currentQuote.text}
            </span>
          </div>
          <div className="quoteAuthor">
            <span style={{ color: style }}> - {currentQuote.author}</span>
          </div>
          <div className="button">
            <button style={{ backgroundColor: style }} onClick={() => setClicked(true)}>New Quote</button>
          </div>
        </div>
      </div>
      <div className="footer">
        by Arjun Porwal
      </div>
    </div>
  );
}

export default App;
