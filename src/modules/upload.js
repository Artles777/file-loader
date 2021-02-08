import {appendElement, afterElement} from "../utils/utils"
import {$container, $input, $open} from './createdElements'
import {loadFiles, triggerFiles} from "./listeners";

function Upload() {

    function generatingDOM() {
        appendElement($container, $input)
        afterElement($input, $open)
    }

    $open.addEventListener('click', triggerFiles)
    $input.addEventListener('change', loadFiles)

    generatingDOM()

    return $container

}

export default Upload()
