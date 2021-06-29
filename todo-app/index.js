import { data } from './data.js';
import { Card } from './card.js';
import { initModal } from './modal.js'
import { initController } from './controller.js'

const getStorages = () => {
    if(localStorage.getItem('todos') === null){
        return []
    }
    return JSON.parse(localStorage.getItem('todods'))
}

export const render = () => {
    document.querySelector('ul').innerHTML = getStorages().map(todo => new Card(todo.title, todo.description).getHtml()).join('')
    document.querySelector('.badge').innerText = data.length
}

const app = () => {
    getStorages()
    initModal()
    initController()
    render()
}

document.addEventListener('DOMContentLoaded', app)

