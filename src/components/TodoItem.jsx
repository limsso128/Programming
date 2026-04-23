import Button from "./Button.jsx";
import Checkbox from "./Checkbox.jsx";

export default function TodoItem({todo, toggleTodo, deleteTodo}) {
  return (
    //todo.isCompeted가 true면, " todo_item--complete", "false면, "" -> 삼항연산자
    <li className={`todo__item ${todo.isCompleted ? "todo__item--complete" : ""}`}>
            <Checkbox 
              id={todo.id} 
              checked={todo.isCompleted} 
              onChange={() => toggleTodo(todo.id)}
            ><>{todo.text}</></Checkbox>
            <Button className="todo__button todo__button--edit">✅</Button>
            <Button 
              className="todo__button todo__button--delete"
              onClick={() => deleteTodo(todo.id)} 
              >🗑️</Button>
          </li>
  );
}
