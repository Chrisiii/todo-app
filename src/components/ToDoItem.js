import React from "react";

function ToDoItem({item, remove, edit}){
    return(
        <div className="item"
         style={{
            display: "flex",
            alignItems: "center",
            margin: "15px auto",
            padding: "15px",
            border: "1px solid black",
            width: "30%",
            justifyContent: "space-between",
            borderRadius: "5px",
            color: "white",
        }}>
            <input type="checkbox" 
            checked={item.done} onChange={() => {edit(item.id)}}
            />
           <div className="editing"
            style={{textDecoration: item.done ? "line-through" : ""}}>
               {item.text}
               </div> 
            <button className="delete-icon" onClick ={() => {remove(item.id)}}>X</button>
        </div>
    )
}

export default ToDoItem;