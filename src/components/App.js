import '../assets/App.css';
import {useState} from "react";
import GameOne from './GameOne'
import GameTwo from './GameTwo'
import {Link, Route, Routes} from "react-router-dom";

function App() {
    const [text, setText] = useState('');

    const handleButtonClick = (path) =>{
        console.log(`Button clicked for ${path}`);
    }
    return (
        <div className="App">
            <h1>Sayı Tahmin Oyunu </h1>
            <h2>Lütfen aşağıdaki oyun modlarından birini seçiniz.</h2>
            <button onClick={() => handleButtonClick("/oyun1")}>
                <Link to="/oyun1" >Oyun 1</Link>
            </button>
            <button onClick={() => handleButtonClick("/oyun2")}>
                <Link to="/oyun2" >Oyun 2</Link>
            </button>
            <Routes>
                <Route path= "/oyun1" element={<GameOne/>} />
                <Route path= "/oyun2" element={<GameTwo/>} />
            </Routes>
        </div>
    );
}

export default App;
