import TodoModel from "../model/TodoModel";
import styles from "../styles/Todo.module.css"

interface PropsTodo{
    value: TodoModel,
    onChange: (novaPorta: TodoModel) => void
    onClick: () => void
}

export default function Todo(props: PropsTodo){

    function mudarEstado (event: any) {
        props.onChange(props.value.finalizarTarefa())
    }

    return (
        <div 
        className={`${styles.todo} ${props.value.isFinalizado ? styles.todoFinalizado : styles.todoPendente}`} 
        onClick={mudarEstado}>
            <button onClick={() => props.onClick()}>X</button>
            <p>
                {props.value.tarefa}
            </p>
        </div>
    )
}