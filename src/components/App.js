import logo from '../assets/logo.svg';
import '../assets/App.css';
import {Container} from "react-bootstrap";
import {useState} from "react";


function App() {
    const [text, setText] = useState('');
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

    function generateRandomNumber(){
        return Math.floor(Math.random())
    }
    const handleTextChange = (event) => {
        setText(event.target.value);
    }
  return (
    <div className="App">
        <h1>Sayı Tahmin Oyunu </h1>
        <input
            type="text"
            placeholder="Enter text here"
            value={text}
            onChange={handleTextChange}
        />
        <p>Doğru cevap: {text}</p>
    </div>
  );
}




export default App;
