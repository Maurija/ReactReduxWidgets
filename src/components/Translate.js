import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// APY KEY GOOGLE API : AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value:  "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Español",
        value: "es"
    }
]

const Translate = () => {
    const [language,setLanguage] = useState(options[0]);
    const [text,setText] = useState("");
    const [debouncedText,setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);
        return () => clearTimeout(timerId);
    },[text]);

 
    
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={e => setText(e.target.value)}/>
                </div>
            </div>
            
           <Dropdown 
                selected={language}
                onSelectedChange={setLanguage}
                label="Select a Language"
                options={options}
           /> 
           <br />
           <h3 className="ui header">Output</h3>
           <Convert text={debouncedText} language={language} />
        </div>
    );

};

export default Translate;