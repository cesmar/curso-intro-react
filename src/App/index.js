import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: 'Tomar curso de intro a react', completed: false},
  { text: 'Tomar curso de angular', completed: false},
  { text: 'Tomar curso de AWS', completed: false},
  { text: 'Tomar curso de PWA', completed: false},
  { text: 'Tomar curso de react native', completed: false},
  { text: 'Otra tarea', completed: true}
]

function App() {

  /*
  console.log('Render antes del use effect');

  React.useEffect(() => {
    console.log('use effect');

  }, [totalTodos, completedTodos]);

  console.log('Render luego del use effect');
  */

  return (
    <TodoProvider>
      <AppUI />  
    </TodoProvider>
  );
}

export default App;
