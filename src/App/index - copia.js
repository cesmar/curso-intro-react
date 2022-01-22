// // import './App.css';
// import React from "react";
// // import { TodoCounter } from '../TodoCounter';
// // import { TodoSearch } from '../TodoSearch';
// // import { TodoList } from '../TodoList';
// // import { TodoItem } from '../TodoItem';
// // import { CreateTodoButton } from '../CreateTodoButton';

// import { AppUI } from "./AppUI";

// /*
// function App() {
// // function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Cespino
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Platzi - {props.saludo} {props.nombre} / {props.children}
//         </a>
//       </header>
//     </div>
//   );
// }
// */

// const defaultTodos = [
//   // { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar curso de intro a react', completed: false},
//   { text: 'Tomar curso de angular', completed: false},
//   { text: 'Tomar curso de AWS', completed: false},
//   { text: 'Tomar curso de PWA', completed: false},
//   { text: 'Tomar curso de react native', completed: false},
//   // { text: 'Llorar con la llorona', completed: false},
//   { text: 'Otra tarea', completed: true}
// ]


// //Custom react hook
// function useLocalStorage(itemName, initialValue) {

//   const localStorageItem = localStorage.getItem(itemName);
//   let parsedItem;

//   if (!localStorageItem) {
//     localStorage.setItem(itemName, JSON.stringify(initialValue));
//     // localStorage.setItem('TODOS_CEM_V1', []);
//     parsedItem = initialValue;
//   }
//   else {
//     parsedItem = JSON.parse(localStorageItem);
//   }


//   const [item, setItem] = React.useState(parsedItem);

//   const saveItem = (newItem) => {
//     const stringiedItem = JSON.stringify(newItem);
//     localStorage.setItem(itemName, stringiedItem);
//     setItem(newItem);
//   };


//   return [
//     item,
//     saveItem
//   ];
// }


// function App() {

//   // const localStorageTodos = localStorage.getItem('TODOS_CEM_V1');
//   // let parsedTodos;

//   // if (!localStorageTodos) {
//   //   localStorage.setItem('TODOS_CEM_V1', JSON.stringify([]));
//   //   // localStorage.setItem('TODOS_CEM_V1', []);
//   //   parsedTodos = [];
//   // }
//   // else {
//   //   parsedTodos = JSON.parse(localStorageTodos);
//   // }

  
//   // // const [todos, setTodos] = React.useState(defaultTodos);
//   // const [todos, setTodos] = React.useState(parsedTodos);
//   const [todos, saveTodos] = useLocalStorage('TODOS_CEM_V1', []);
//   // // Otro ejemplo de llamada
//   const [name, saveName] = useLocalStorage('NOMBRE_IMPORTANTE', 'Fernando');
  

//   const [searchValue, setSearchValue] = React.useState('');

//   const completedTodos = todos.filter(todo => todo.completed).length;
//   const totalTodos = todos.length;

//   let searchedTodos = [];

//   if (!searchValue.length >= 1) {
//     searchedTodos = todos;
//   }
//   else {
//     searchedTodos = todos.filter(todo => {
//       const todoText = todo.text.toLowerCase();
//       const searchText = searchValue.toLowerCase();

//       return todoText.includes(searchText);
//     });
//   }


//   // const saveTodos = (newTodos) => {
//   //   const stringiedTodos = JSON.stringify(newTodos);
//   //   localStorage.setItem('TODOS_CEM_V1', stringiedTodos);
//   //   setTodos(newTodos);
//   // };


//   const completeTodo = (text) => {
//     const todoIndex = todos.findIndex(todo => todo.text === text);
//     // todos[todoIndex] = {
//     //   text: todos[todoIndex].text,
//     //   completed: true,
//     // };

//     // todos[todoIndex].completed = true;

//     const newTodos = [...todos];
//     // newTodos[todoIndex].completed = true;
//     newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
//     // setTodos(newTodos);
//     saveTodos(newTodos);
//   };


//   const deleteTodo = (text) => {
//     const todoIndex = todos.findIndex(todo => todo.text === text);

//     const newTodos = [...todos];
//     newTodos.splice(todoIndex, 1);
//     // setTodos(newTodos);
//     saveTodos(newTodos);
//   };



//   return [
//     <p>{name}</p>,

//     <AppUI
//       totalTodos = {totalTodos}
//       completedTodos = {completedTodos}
//       searchValue = {searchValue}
//       setSearchValue = {setSearchValue}
//       searchedTodos = {searchedTodos}
//       completeTodo = {completeTodo}
//       deleteTodo = {deleteTodo}
//     />

      
//     // <React.Fragment>
//     //   <TodoCounter 
//     //     total = {totalTodos}
//     //     completed = {completedTodos} 
//     //   />
//     //   <TodoSearch
//     //     searchValue={searchValue}
//     //     setSearchValue={setSearchValue}
//     //   />
      
//     //   <TodoList>
//     //     {searchedTodos.map(todo => (
//     //       <TodoItem 
//     //           key={todo.text} 
//     //           text={todo.text} 
//     //           completed={todo.completed}
//     //           onComplete={() => completeTodo(todo.text)}
//     //           onDelete={() => deleteTodo(todo.text)}
//     //       />
//     //     ))}
//     //   </TodoList>
      
//     //   <CreateTodoButton />
//     // </React.Fragment>
//   ];
// }

// export default App;
