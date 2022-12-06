import { useState, useEffect , useRef} from "react";
import Panel from "./Panel";

const Dropdown = ({options, selected, onSelectedChange, label}) => {
    const [open,setOpen] = useState(false);
    const ref = useRef();

    //Método para que cierre el dropdown si se hace click en cualquier parte del body
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener("click",onBodyClick,{capture:true});
        
        return (() => {
            document.body.removeEventListener("click",onBodyClick,{capture:true});
        }); 
    },[]);

    const renderedOptions = options.map( (option) => {
        if (option.value === selected.value){
            return null;
        }
        return (
            <div 
                onClick={() => {onSelectedChange(option)}}
                key={option.value} 
                className="item"
                >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label || 'Select...'}</label>
                <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => {setOpen(!open)}}>
                    <i className="dropdown icon"></i>
                    <Panel className="text">{selected.label}</Panel>
                    <Panel className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </Panel>                    
                </div>
                {/* Comento la siguiente línea para que pueda ser reutilizado el dropdown para otros valores que no sean colores */}
                {/* <div style={{color: `${selected.value}`}}>{selected.label}</div> */}
            </div>
        </div>
    );
};

export default Dropdown;