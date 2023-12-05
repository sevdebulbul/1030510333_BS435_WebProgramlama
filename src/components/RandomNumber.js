import {useState} from "react";

export function RandomNumber() {
    const RandomNumberGenerator = () => { //kullanıcının girdiği sayıyı kullanarak bir random sayı oluşturuyoruz.
        const [firstValue, setFirstValue] = useState('');
        const [secondValue, setSecondValue] = useState('');
        const [randomNumber, setRandomNumber] = useState(null);

        const generateRandomNumber = () => {
            const first = parseInt(firstValue, 10);
            const second = parseInt(secondValue, 10);


            const random = Math.floor(Math.random() * (second + first) / 2 + 1) + first;
            setRandomNumber(random);

        }

        return (
            <div>
                <h1>Lütfen pozitif ve 0 olmayan iki sayı seçiniz.</h1>
                <label>
                    İlk sayı:
                    <input
                        type="number"
                        value={firstValue}
                        onChange={(e) => setFirstValue(e.target.value)}
                    />
                </label>
                <label>
                    İkinci sayı:
                    <input
                        type="number"
                        value={secondValue}
                        onChange={(e) => setSecondValue(e.target.value)}
                    />
                </label>
                <br/>
                <button onClick={generateRandomNumber}>Tahmin edilecek sayıyı oluşturun.</button>
            </div>
        )
    }

}

export default RandomNumber;