import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import ToDoHeader from './components/toDoHeader';
import { v4 as uuidv4 } from 'uuid';
import ToDoFooter from './components/ToDoFooter';

function App() {

  const [toDoItems, settoDoItems] = useState([
    {
      id: uuidv4(),
      text: "Walk the dog",
      done: false
    },
    {
      id: uuidv4(),
      text: "Complete Javascript",
      done: false
    },
    {
      id: uuidv4(),
      text: "Meet Joseph",
      done: false
    },


  ]);
  const [toDoName, settoDoName] = useState("");

  const change = (e) => {
    settoDoName(e.target.value);
  }

  const addToDo = (e) => {
    e.preventDefault();
    const newToDo = {
      id: uuidv4(),
      text: toDoName,
      done: false
    }
    settoDoItems([...toDoItems, newToDo]);

    settoDoName("");
  }

  const deleteCompleted = () => {
    const completed = toDoItems.filter((todo) => !todo.done)
    settoDoItems(completed)
  }

  const editToDo = (id) => {
    const index = toDoItems.findIndex((toDo) => toDo.id === id)
    const editingToDoitem = toDoItems.find((toDo) => toDo.id === id)
    const newItems = [...toDoItems]
    newItems.splice(index, 1, { ...editingToDoitem, done: !editingToDoitem.done })
    settoDoItems(newItems)
  }

  const removeToDo = (id) => {
    const index = toDoItems.findIndex((toDo) => toDo.id === id)
    const newItems = [...toDoItems]
    newItems.splice(index, 1)
    settoDoItems(newItems)
  }

  return (
    <div className="App">
      <ToDoHeader add={addToDo} toDoName={toDoName} onChange={change} />
      <List toDoItems={toDoItems} edit={editToDo} remove={removeToDo} />
      <ToDoFooter completed={deleteCompleted} toDoItems={toDoItems} />
    </div>
  );
}

export default App;
