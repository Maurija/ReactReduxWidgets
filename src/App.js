import React from "react";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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
    const [selected,setSelected] = useState(options[0]);
    const [showDropdown,setShowDropdown] = useState(true);

    return (
        <div>
            {/* <Accordion items={items}/> */}
            <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown                
                selected={selected} 
                onSelectedChange={setSelected}
                options={options}/> :
                null
            }
            
        </div>

    );
};

export default App;