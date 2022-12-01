import { useEffect, useState } from 'react';
import DataElement from './api/components/DataElement';
import './Fetch.css';

function ShowData() {

    const [country, setCountry] = useState("de");
    const [data, setData] = useState([]);
    const [api, setApi] = useState(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=286ee79d24fd46a2897b2af7e96c38ef`);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then((data) => {
                //console.log(data);
                setData(data.articles);
                setError("");
                console.log(data.articles);
                /* if (data.articles === undefined) {
                    setData([]);
                    setError("Keine Suchergebnisse");
                } */
            });
    }, [country, api]);


    return (
        <main>
            <div>
                <div>
                    <input onChange={(e) => setSearch(e.target.value)} placeholder="search"></input>
                    <button onClick={() => { setApi(`https://newsapi.org/v2/everything?q=${search}&from=2022-12-01&sortBy=popularity&apiKey=a44950ea0b844b928c2605c2d8c45b4f`); }}>search</button>
                </div>
                <select onChange={(e) => { setCountry(e.target.value); setApi(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=286ee79d24fd46a2897b2af7e96c38ef`); }}>
                    <option value="de" >Germany</option>
                    <option value="us">America</option>
                    <option value="nl">Netherlands</option>
                </select>
            </div>

            {
                data.map((dataElement) => {
                    return (
                        <div>
                            <DataElement {...dataElement} />

                        </div>
                    );
                })
            }
        </main >
    );


}
export default ShowData;




/* setApi(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=286ee79d24fd46a2897b2af7e96c38ef`); */