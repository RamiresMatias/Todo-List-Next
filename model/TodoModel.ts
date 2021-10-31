export default class Todo{
    #isFinalizado: boolean
    #tarefa: string

    constructor(isFinalizado: boolean = false, tarefa: string){
        this.#isFinalizado = isFinalizado
        this.#tarefa = tarefa

    }

    get tarefa(){
        return this.#tarefa
    }

    get isFinalizado(){
        return this.#isFinalizado
    }

    set isFinalizado(finalizado){
        this.#isFinalizado = finalizado
    }

    set tarefa(descricao){
        this.#tarefa = descricao
    }

    finalizarTarefa(){
        return new Todo(!this.isFinalizado, this.tarefa)
    }
}