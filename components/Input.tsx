import { useState } from "react"
import TodoModel from "../model/TodoModel"
import styles from "../styles/Input.module.css"

interface PropsTarefa{
    novaTarefa: (todo: TodoModel) => void
}

export default function Input(props: PropsTarefa){

    const [descricao, setDescricao] = useState('')
    
    function salvaTarefa(event: any){
        console.log(event);
        if((event.key === 'Enter' || event.type === 'click') && descricao.trim()) {
            let todo = new TodoModel(false, descricao.trim())
            props.novaTarefa(todo)
            setDescricao('')
        }
    }

    return (
        <div className={styles.input}>
            <input 
                value={descricao}
                type="text" 
                onKeyDown={salvaTarefa}
                placeholder="Insira uma tarefa" 
                onChange={(e) => setDescricao(e.target.value)}
            />
            <button onClick={salvaTarefa}>+</button>
        </div>
    )
}