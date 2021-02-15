import {$input, $open, $preview, $load} from './createdElements'
import {loadFiles, loadingHandler, removeFile, triggerFiles} from "./listeners"

function upload() {
    $open.addEventListener('click', triggerFiles)
    $input.addEventListener('change', loadFiles)
    $preview.addEventListener('click', removeFile)
    $load.addEventListener('click', loadingHandler)
}


export default upload
