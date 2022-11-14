import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

const App = () =>{
    return (
        <div>
            {/* <Accordion items={items}/> */}
            <Search />
        </div>

    );
};

export default App;