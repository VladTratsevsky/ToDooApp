import { toggle } from './utils.js'
import { data } from './data.js';
import { render } from './index.js'


export const initController = () => {
    document.querySelector('#app-controller').addEventListener('click', e =>{
        if(e.target.classList.contains('btn-info')){
            toggle(document.querySelector('.modal'))
        }else if(e.target.classList.contains('btn-warning')){
            data.pop()
            render()
        }else if(e.target.classList.contains('btn-danger')){
            data.length = 0
            render()
        }
    })
}