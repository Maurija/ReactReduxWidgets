import React,{useState,useEffect} from "react";
import axios from "axios";

const Search = () => {
    const [term,setTerm] = useState('programming');
    const [debouncedTerm,setDebouncedTerm] = useState(term);
    const [results,setResults] = useState([]);

    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return () => clearTimeout(timerId);
    },[term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });           
           setResults(data.query.search);
        };
        search();
    },[debouncedTerm]);
    

    //Método para re-renderizar el componente dependiendo el segundo parámetro
    //useEffect(()=>{...},[]) = Se ejecuta únicamente cuando se renderiza por primera vez.
    //useEffect(()=>{...}) = Se ejecuta cuando se renderiza por primera vez, y cada vez que se re renderiza
    //useEffect(()=>{...},[data]) = Se ejecuta cuando se renderiza por primera vez, y cada vez que se renderiza nuevamente y "data" haya cambiado de valor
    //se ejecuta siempre luego de haberse renderizado el componente. (además de evaluar el segundo parámetro.)
    // ATENCION!! Este método realiza dos peticiones a la API. debido a que al comienzo hace entra al if ya que results.length===0
    // hace el search() y como dentro del search() actualiza el setResults() debe re-renderizar de nuevo y ahora entra 
    // al else, lo que ocasiona otra request a la API. Esto se soluciona con otro State "debouncedTerm" para tener un valor inicial y 
    // ver que no se busca dos veces la misma palabra, el user debe modificar el valor inicial/actual de term para que realice el request
    // La corrección está arriba!
    // useEffect(() => {        
    //      const search = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         });           
    //        setResults(data.query.search);
    //     };
            
    //     if (term && !results.length){
    //         search();
    //     }else{
    //         const timeoutId = setTimeout(() => {
    //             if (term){
    //                 search();
    //             }
    //         }, 1000);
    //         //La siguiente línea es el retorno de la función useEffect(). 
    //         //Se utiliza casi siempre para realizar un CLEANUP.
    //         return () => { clearTimeout(timeoutId); };
    //     }
                
        
        
    // },[term,results.length]);
    
    
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