import Button from "./Button.jsx";
import { useState } from "react";

export default function TodoAdder({ onAdd: addTodo }) {
  const[   inputtodo, setInputTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); //기본 동작 
    if(!inputTodo.trim()) return; //빈 칸이면 바로 return
    addTodo(inputTodo.trim()); //input에 있는 text value를 할 일 내용으로 추가하자자
    setInputTodo('');
  }
  
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input type="text" 
      className="todo__input" 
      placeholder="할 일을 입력하세요."
      value = {inputtodo}
      onChange={(event) => setInputTodo(event.target.value)}
      />

      <Button type="submit" className="todo__button todo__button--add">Add</Button>
    </form>
  );
}
