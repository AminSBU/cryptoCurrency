import { useEffect, useState } from "react";

function CryptoCurrency() {
    const [cryptoPrice, setCryptoPrice] = useState('');
    const [cryptoList, setCryptoList] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            
            const API_KEY = 'n4rj57noc5ep6y5xu5sw';
            const API_URL = 'https://api.freecryptoapi.com/v1/getCryptoList';

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

            // Take only items 0–100 (or fewer if not available)
            const first100 = data.result.slice(0, 2001);
            console.log(first100);
            setCryptoList(first100);
        }
        fetchData();
    },[]);

    return(
        <>
            <h2>Top 100 Cryptocurrencies</h2>
            <ul>
                {cryptoList.map((crypto, index) => (
                    <li key={crypto.symbol || index}>
                        <strong>{index + 1}. {crypto.symbol}</strong> — {crypto.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CryptoCurrency;