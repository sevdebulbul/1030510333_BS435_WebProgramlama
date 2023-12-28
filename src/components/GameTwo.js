import {useState} from "react";

export function GameTwo() {
    const [minRange, setMinRange] = useState(-100);
    const [maxRange, setMaxRange] = useState(-1);
    const [hedefSayi, setHedefSayi] = useState(generateRandomNumber());
    const [tahmin, setTahmin] = useState('');
    const [mesaj, setMesaj] = useState('');

    function generateRandomNumber(){
        return Math.floor(Math.random()*(maxRange - minRange + 1)) + minRange;
    }

    function handleMinRangeChange(e){
        setMinRange(parseInt(e.target.value, 10));
    }

    function handleMaxRangeChange(e){
        setMaxRange(parseInt(e.target.value, 10));
    }

    function handleInputChange(e){
        setTahmin(e.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        const tahminSayi = parseInt(tahmin, 10);

        if(isNaN(tahminSayi)){
            setMesaj('Geçerli bir sayı değil.');
            return;
        }

        if(tahminSayi === hedefSayi){
            setMesaj('Tebrikler doğru tahmin!');
            setHedefSayi(generateRandomNumber());
            setTahmin('');
        } else {
            setMesaj(
                tahminSayi < hedefSayi
                ? 'Çok küçük.'
                : 'Çok büyük.'
            );
        }
    }
    return(
        <div>
            <h1>Negatif Sayı Tahmin Oyununa Hoşgeldiniz!</h1>
            <p>{mesaj}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Alt sınır:
                    <input type="number" value={minRange} onChange={handleMinRangeChange} required />
                </label>
                <label>
                    Tahmininiz:
                    <input type="number" value={tahmin} onChange={handleInputChange} min={minRange} max={maxRange} required />
                </label>
                <button type="submit">Şansını Dene!</button>
            </form>
        </div>
    )
}
export default GameTwo;