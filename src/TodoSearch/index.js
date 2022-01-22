import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    // const [] = React.useState('');

    const onSearchValueChanged = (event) => {
        // if(event.target.value.length > 4) {
        //     console.log(event);
        // }

        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
            // onChange={() => setSearchValue('Enrique')}
        <input 
            className="TodoSearch" 
            placeholder="Valor de búsqueda" 
            value={searchValue}
            onChange={onSearchValueChanged}
        />
        // ,
        // <p>
        //     {searchValue}
        // </p>
    );
}

export {TodoSearch};