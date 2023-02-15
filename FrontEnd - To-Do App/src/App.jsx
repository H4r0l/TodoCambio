import React, { useEffect, useState } from 'react'
import './App.css'
import todos from "./apis/index"

import Form from './components/Form'
import Section from './components/Section'
import List from './components/List'

const appTitle = "To-Do App"

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }
    fetchData();
  }, [])

  const addTodo = async (item) => { 
    const { data } = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  }

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  }
  return (
    <div className="App container text-center aligned bg-secondar">
      <Section>
          <h1 className='fs-1'>{appTitle}</h1>
      </Section>

      <Section>
          <Form addTodo={addTodo} />
      </Section>

      <Section>
        <List
          editTodoListProp={editTodo}
          removeTodoListProp={removeTodo}
          list={todoList}
        />
      </Section>
    </div>
  )
}

export default App
