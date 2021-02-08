import upload from './modules/upload'
import {createApp} from './modules/App'
import './style.scss'

createApp(upload).render('#app').use({
    multi: true,
    accept: ['.png', '.jpg', '.jpeg', '.gif']
})
