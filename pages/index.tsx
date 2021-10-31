import styles from '../styles/Home.module.css'
import Input from "../components/Input"
import TodoModel from '../model/TodoModel'
import { useEffect, useState } from 'react'
import Todo from "../components/Todo"
import { atualizaEstado } from '../functions/estadoTodo'


export default function Home() {

  const [listaTodos, setListaTodos] = useState([])
  const [novoTodo, setNovoTodo] = useState(null)

  function adicionaTodo(todo: TodoModel){
    setNovoTodo(todo)
  }

  useEffect(() => {
    if(novoTodo) {
      setListaTodos([
        ...listaTodos,
        novoTodo
      ])
    }
  },[novoTodo])

  function excluirTodo(indexTodo: number){
    setListaTodos([...listaTodos.splice(indexTodo, 1)])
  }

  function listarTodos(){
    return listaTodos.map((t, i) => {
      return (
        <Todo 
          value={t} 
          key={i} 
          onChange={todoAtualizado => setListaTodos(atualizaEstado(listaTodos, todoAtualizado))}
          onClick={() => excluirTodo(i)}
        />
      )
    })
  }

  return (
    <div className={styles.container}>
        <div className={styles.titulo}>
          <h1>Todo List</h1>
        </div>
        <Input 
          novaTarefa={adicionaTodo}
        />
        <div className={styles.listaTodosContainer}>
          {listarTodos()}
        </div>
    </div>
  )
}
