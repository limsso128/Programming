import Button from "./Button";
import {useState} from 'react';

export default function TodoAdder({ addTodo }) {    //const { addTdo } = props;
  const [inputTodo, setInputTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();  //submit 이벤트의 기본 동작인 페이지 새로고침 방지
    if(!inputTodo.trim()) return;  //trim() 메서드는 문자열의 양쪽 끝에서 공백을 제거한 새로운 문자열을 반환한다.
    addTodo(inputTodo);   //input에 있는 text value를 할 일 내용으로 추가
    setInputTodo("");    //input 초기화
  }
  return (
    <form className="todo__from" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo__input"
        placeholder="할 일을 입력하세요."
        value={inputTodo}
        onChange={(event) => setInputTodo(event.target.value)}
      />
      <Button type="submit" className="todo__button todo__button--add">
        Add
      </Button>
    </form>
  );
}
