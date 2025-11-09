import { useEffect, useState } from "react";

function CryptoCurrency() {
    const [cryptoPrice, setCryptoPrice] = useState('');

    useEffect(() => {
        const fetchData = async() => {
            
            const API_KEY = 'n4rj57noc5ep6y5xu5sw';
            const API_URL = 'https://api.freecryptoapi.com/v1/getData?symbol=BTC';

            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                }
            })
                    
            if(!response.ok)
            {
                throw new Error('fetch failed');
            }

            const data = await response.json();

            console.log(data);

            setCryptoPrice(data.symbols[0].last);
        }
        fetchData();
    },[]);

    return(
        <>
            <p>{cryptoPrice}</p>
        </>
    );
}

export default CryptoCurrency;