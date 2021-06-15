import './App.css';
import combinations from "./functions/combinations";
import {useState} from "react";

function App() {

  const [ngram, setNgram] = useState([]);

  const handleInputChange = (event) => {
    let text = event.target.value;

    // if ends with white space remove it!
    if (text.endsWith(" "))
      text = text.slice(0, -1);

    setNgram(combinations(...text.split(" ")));
  };
  console.log(ngram);
  return (
    <div className="App">
      <label>
        write a sentence
      </label>
      <label>
        example: show me the code
      </label>
      <input type="text" onChange={handleInputChange} />

      <div className="ngram">
        {ngram.length ? "[" : ""}
        {ngram.length ?
          ngram.map((word, index) => {
            return <p key={index}>{word},</p>;
          }) : ""
        }
        {ngram.length ? "]" : ""}
      </div>
    </div>
  );
}

export default App;
