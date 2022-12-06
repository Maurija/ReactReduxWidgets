import React from "react";
import { useState } from "react";
import Translate from "./components/Translate";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Route from "./components/Route";
import Header from "./components/Header";



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
    // const [showDropdown,setShowDropdown] = useState(true);

    
    
    return (
        <div className="ui container">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"    
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>

            
        </div>

    );
};

export default App;