import { useEffect } from "react";

function CryptoCurrency() {


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
        }
        fetchData();
    },[]);

    return(
        <>
            <p></p>
        </>
    );
}

export default CryptoCurrency;