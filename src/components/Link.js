import React from "react";

const Link = ({className, href, children}) => {

    
    const onClick = (event) => {
        //estas líneas permiten que se pueda hacer click con ctrl presionado
        // y se abra una nueva pestaña
        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        window.history.pushState({},'',href);

        //estas líneas se usan para comunicarle a los root components
        // que el pathname cambió
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;