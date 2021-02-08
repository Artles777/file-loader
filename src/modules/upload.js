import {appendElement, afterElement} from "../utils/utils"
import {$container, $input, $open} from './createdElements'
import {fileHandler} from "./listeners";

function Upload() {

    function generatingDOM() {
        appendElement($container, $input)
        afterElement($input, $open)
    }

    $open.addEventListener('click', fileHandler)
    $input.addEventListener('change', e => {
        const files = Array.from(e.target.files)
        console.log(files)
    })

    generatingDOM()

    return $container

}

export default Upload()