import React,{useState,useEffect} from "react";
import axios from "axios";

const Search = () => {
    const [term,setTerm] = useState('programing');
    const [results,setResults] = useState([]);

    
    

    //Método para re-renderizar el componente dependiendo el segundo parámetro
    //useEffect(()=>{...},[]) = Se ejecuta únicamente cuando se renderiza por primera vez.
    //useEffect(()=>{...}) = Se ejecuta cuando se renderiza por primera vez, y cada vez que se re renderiza
    //useEffect(()=>{...},[data]) = Se ejecuta cuando se renderiza por primera vez, y cada vez que se renderiza nuevamente y "data" haya cambiado de valor
    //se ejecuta siempre luego de haberse renderizado el componente. (además de evaluar el segundo parámetro.)
    useEffect(() => {        
         const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });           
           setResults(data.query.search);
        };
        const timeoutId = setTimeout(() => {
            if (term){
                search();
            }
        }, 1000);
                
        return (()=>clearTimeout(timeoutId));
        
    },[term]);
    clase 166
    
    const renderResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                            Go
                        </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {result.snippet}
                </div>
            </div>
        );


    });

        return (
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>Enter Search Term</label>
                        <input 
                        className="input" 
                        value={term}
                        onChange={e => setTerm(e.target.value)} 
                        />
                    </div>
                </div>
                <div className="ui celled list">
                    {renderResults}
                </div>
            </div>
        );

};

export default Search;