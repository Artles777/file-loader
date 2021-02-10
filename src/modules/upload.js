import {$input, $open, $preview} from './createdElements'
import {loadFiles, removeFile, triggerFiles} from "./listeners"

function upload() {
    $open.addEventListener('click', triggerFiles)
    $input.addEventListener('change', loadFiles)
    $preview.addEventListener('click', removeFile)
}


export default upload
