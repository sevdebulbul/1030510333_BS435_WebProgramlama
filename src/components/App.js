import '../assets/App.css';
import GameOne from './GameOne'
import GameTwo from './GameTwo'
import {Link, Route, RouterProvider, Routes} from "react-router-dom";
import React from "react";

const App =() =>  {
    return (
        <div className="App">
            <h1>Sayı Tahmin Oyunu </h1>
            <h2>Lütfen aşağıdaki oyun modlarından birini seçiniz.</h2>
            <Link to="/oyun1" className="game-button">Oyun 1</Link>
            <br/>
            <Link to="/oyun2" className="game-button">Oyun 2</Link>
            <Routes>
                <Route path= "/oyun1" element={<GameOne/>} />
                <Route path= "/oyun2" element={<GameTwo/>} />
            </Routes>
        </div>
    );
}
export default App;
