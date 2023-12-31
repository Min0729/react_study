// fetch (기본제공, 설치필요없이 간편)
// axios (라이브러리)

import axios from 'axios';
import { response } from 'express';
import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:4000/api/todo');
    setTodoList(response.data);
 
    // axios.get('http://localhost:4000/api/todo').then((response) => 
    // setTodoList(response.data));

    // fetch('http://localhost:4000/api/todo')
    // .then((response) => response.json())
    // .then((data) => setTodoList(data));
  }

  useEffect(() => {
    fetchData()
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    await axios.post('http://localhost:4000/api/todo', {text, done});
    fetchData();
    // fetch('http://localhost:4000/api/todo', {
    //   method: 'POST',
    //   headers:{
    //     'Content-Type' : 'application/json',
    //   },
    //   body : JSON.stringify({
    //     text,
    //     done,
    //   }),
    // }).then(() =>  
    // fetchData())
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>

      <form onSubmit={onSubmitHandler}>
        <input name="text"/>
        <input name="done" type="checkbox"/>
        <input type="submit" value="추가"/>
      </form>

      {todoList.map((todo) => {
        return(
        <div key={todo.id} style={{display: 'flex'}}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'Y' : 'N'}</div>
        </div>
      )})}
    </div>
  );
}

export default App;
