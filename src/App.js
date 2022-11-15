import React from "react";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

// APY KEY GOOGLE API : AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
clase 188
const items = [
    {
        title: "What is React?",
        content: "lorem lorem lorem"
    },
    {
        title: "What is React2?",
        content: "lorem lorem lorem2"
    },
    {
        title: "What is React3?",
        content: "lorem lorem lorem3"
    }
];

const options = [ 
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
];

const App = () =>{
    // const [selected,setSelected] = useState(options[0]);
    // const [showDropdown,setShowDropdown] = useState(true);

    return (
        <div className="ui container">
            <Translate />
        </div>

    );
};

export default App;