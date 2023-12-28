import React , {useState} from "react";

const GameOne=() => {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [randomSayi, setRandomSayi] = useState(generateRandomSayi(min,max));
    const [tahmin, setTahmin] = useState('');
    const [mesaj, setMesaj] = useState('');

    function generateRandomSayi (min, max){
        return  Math.floor(Math.random() * (max - min + 1))+ min;
    }

    const handleMinChange  = (event) => {
        setMin(parseInt(event.target.value) || 0);
    };
    const handleMaxChange  = (event) => {
        setMax(parseInt(event.target.value) || 0);
    };

    const handleInputChange  = (event) => {
        setTahmin(event.target.value);
    };

    const handleGuess = () => {
        const  guess = parseInt(tahmin);

        if(isNaN(guess) || guess < min || guess > max){
            setMesaj(`(${min} ile ${max}) arasında olan geçerli bir sayı giriniz.`);
            return;
        }
        if (guess === randomSayi){
            setMesaj('Doğru sayıyı buldunuz tebrikler!');
        }else if (guess < randomSayi){
            setMesaj('Çok küçük!');
        }else {
            setMesaj('Çok büyük!');
        }
    };
    const handleTekrar = () => {
        setMin(1);
        setMax(100);
        setRandomSayi(generateRandomSayi(min, max));
        setTahmin('');
        setMesaj('');
    }
    console.log(`Guess: ${tahmin}, Random Sayı: ${randomSayi}`,`Mesaj: ${mesaj}`);
    return(
        <div>
            <h1>Pozitif Sayı Tahmin Oyununa Hoşgeldiniz!</h1>
            <label>
                Alt sınır:
                <input type="number" value={min} onChange={handleMinChange} />
            </label>
            <label>
            Üst sınır:
            <input type="number" value={max} onChange={handleMaxChange} />
            </label>
            <p>{mesaj}</p>
            {!mesaj.includes('tebrikler') && (
                <div>
                    <input type="number" value={tahmin} onChange={handleInputChange}
                           placeholder={`Sayıyı tahmin edin (${min}-${max})`}
                    />
                    <button onClick={handleGuess}>Şansını dene!</button>
                </div>
            )}
            <button onClick={handleTekrar}>Yeniden oyna!</button>
        </div>
    )
}
export default GameOne;