
import TodoModel from "../model/TodoModel";

export function atualizaEstado(todos: TodoModel[], todoModificado: TodoModel){
    return todos.map(todoAtual => {
        const todoEncontrado = todoAtual.tarefa === todoModificado.tarefa
        if(todoEncontrado) return todoAtual.finalizarTarefa()
        return todoAtual
    })
} 