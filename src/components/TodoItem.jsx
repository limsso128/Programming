import Button from "./Button.jsx";
import Checkbox from "./Checkbox.jsx";
import { useState } from "react";

export default function TodoItem({todo, toggleTodo, deleteTodo, editTodo}) {
  const [ isEditing, setIsEditing ] = useState(false); ///수정중인지 아닌지지
  const [ editedText, setEditedText ] = useState(todo.text); //수정중인 text
  function handleEditClick() {
    if(!isEditing) {
      setIsEditing(true);
      setEditedText(todo.text); 
    } else {
       const trimmedText = editedText.trim();
       //빈칸이 아니고 이전 text가 아닐때만 editTodo() 호출
       if(trimmedText && trimmedText !== todo.text) {
        editTodo(todo.id, trimmedText);
       }
       setIsEditing(false);
    }
  }

  return (
    //todo.isCompeted가 true면, " todo_item--complete", "false면, "" -> 삼항연산자
    <li className={`todo__item ${todo.isCompleted ? "todo__item--complete" : ""}`}>
      { !isEditing &&
            <Checkbox 
              id={todo.id} 
              checked={todo.isCompleted} 
              onChange={() => toggleTodo(todo.id)}
            ><>{todo.text}</></Checkbox>
      }
      { isEditing && 
      <input
        type="text"
        className="todo_input--edit"
        value={editedText}
        onChange={(event) => setEditedText(event.target.value)}
        //enter치면, handleEditClick 호출하자
        onKeyDown={(event) => {
          if(event.key === "Enter") {
            handleEditClick();
          }
        }}
        autoFocus
      />
      }

            <Button
             className="todo__button todo__button--edit"
              onClick={handleEditClick}
            >{isEditing ? "✅" : "✏️"}</Button>
            <Button 
              className="todo__button todo__button--delete"
              onClick={() => deleteTodo(todo.id)} 
              >🗑️</Button>
          </li>
  );
}
