import {$container, $input, $open} from './createdElements'
import {loadFiles, triggerFiles} from "./listeners"
import {createDOM} from "./createDOM"

function Upload() {
    $open.addEventListener('click', triggerFiles)
    $input.addEventListener('change', loadFiles)

    return $container

}

createDOM()

export default Upload()
