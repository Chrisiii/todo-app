import React from 'react';
import './App.css';
import List from './components/List';
import ToDoHeader from './components/toDoHeader';
import { toDoItems } from "./mock/toDoItems";
import { v4 as uuidv4 } from 'uuid';
import ToDoFooter from './components/ToDoFooter';

class App extends React.Component {

  state = {
    toDoItems,
    toDoName: '',
}

change = (e) => {
  this.setState({
    toDoName: e.target.value
  })
}

addToDo = (e) => {
  e.preventDefault();
  const newToDo =  {
      id: uuidv4(),
       text: this.state.toDoName,
       done: false
   }
   this.setState({
       toDoItems: [...this.state.toDoItems, newToDo]
   })

   this.setState({
    toDoName: ""
})
  
}

deleteCompleted = () => {
  const completed = this.state.toDoItems.filter((todo) => !todo.done)
  this.setState({toDoItems: completed})
}

editToDo = (id) => {
  const index = this.state.toDoItems.findIndex((toDo) => toDo.id === id)
  const editingToDoitem = this.state.toDoItems.find((toDo) => toDo.id === id)
  const newItems = [...this.state.toDoItems]
  newItems.splice(index, 1, {...editingToDoitem, done: !editingToDoitem.done})
  this.setState({toDoItems: newItems })
}

removeToDo = (id) => {
   const index = this.state.toDoItems.findIndex((toDo) => toDo.id === id)
   const newItems = [...this.state.toDoItems]
   newItems.splice(index, 1)
   this.setState({toDoItems: newItems})
}

  render(){
    return (
      <div className="App">
       <ToDoHeader add={this.addToDo} toDoName={this.state.toDoName} onChange={this.change}/>
       <List toDoItems={this.state.toDoItems} edit={this.editToDo}   remove={this.removeToDo}/>
       <ToDoFooter completed={this.deleteCompleted} toDoItems={this.state.toDoItems} />
      </div>
    );
  }
}

export default App;
