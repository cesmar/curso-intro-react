import React from "react";
// import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton(props) {

    // const { openModal, setOpenModal } = React.useContext(TodoContext);


    //  const onClickButton = (msg) => {
    const onClickButton = () => {
        //  alert('Aquí se debería abrir el modal');
        //  alert(msg);

        // // props.setOpenModal(true);
        // setOpenModal(!openModal);
        props.setOpenModal(prevState => !prevState);
     }

    return(
            // onClick={() => console.log('clic')}   
            // onClick={ onClickButton }    
            // onClick={ () => onClickButton('Abrir modal') }    
        <button 
            className="CreateTodoButton"
            onClick={ onClickButton }    
        >
            +
            {/* {openModal ? 'x' : '+'} */}
        </button>
    );
}

export { CreateTodoButton };