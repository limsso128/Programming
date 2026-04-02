function TodoListApp() {
  return (
    <>
      <h1>ToDo ToDo</h1>
      <form action="">
        <input type="text" />
        <button>Add</button>
      </form>
      <ul>
        <li><input type="checkbox" name="" id="" />
        <label htmlFor="">옷 싸기</label>
        <button>✏️</button>
        <button>🗑️</button>
        </li>
        <li><input type="checkbox" name="" id="" />
        <label htmlFor="">잠 자기</label>
        <button>✏️</button>
        <button>🗑️</button>
        </li>
      </ul>
    </>
  )
}

//자바스크립트에는 for가 있어서 for가 아닌 htmlFor를 사용한다.

export default TodoListApp
