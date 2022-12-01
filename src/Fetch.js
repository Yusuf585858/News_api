import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Fetch.css';

function ShowData() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=apple&from=2022-11-30&to=2022-11-30&sortBy=popularity&apiKey=bfaa9582f77344449d3e85a34b18fac5')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setData(data.articles);
            });
    }, []);


    return (
        <div>
            {
                data.map((article) => {
                    return (
                        <div>
                            <img className='breite' src={article.urlToImage} />
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <p>{article.publishedAt}</p>
                            <button><a href={article.url}>Read More</a></button>
                        </div>
                    );
                })
            }
        </div>
    );


}
export default ShowData;