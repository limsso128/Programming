import TodoItemEmpty from "./TodoItemEmpty.jsx";
import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, ...rest }) {
  return (
    <ul className="todo__list">
          {/* todos가 없으면, TodoItemDmpty */}
          {todos.length === 0 && <TodoItemEmpty />}
          {/* todos가 있있으면, TodoItem */}
          {todos.length > 0 && 
            //todos에서 하나씩 꺼내서 todo -> <TodoItem todo = {todo}
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} {...rest} />)
          }
    </ul>
  );
}



