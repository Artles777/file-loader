import {createApp} from './modules/App'
import './style.scss'
import {$root} from "./modules/createdElements"
import upload from "./modules/upload";
import {createDOM} from "./modules/createDOM";

createApp($root).render('#app').use({
    multi: true,
    accept: ['.png', '.jpg', '.jpeg', '.gif'],
    callback: [upload, createDOM]
})
