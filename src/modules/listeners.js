import {$input, $load, $open, $preview} from "./createdElements"
import {previewHTML} from "./createDOM"
import {changeBlock} from "../utils/utils";

let files = []

export function triggerFiles() {
    return $input.click()
}

export function loadFiles(event) {
	$preview.innerHTML = ''
	files = Array.from(event.target.files)
	files.forEach(file => {
		if (!file.type.match('image')) {
			return
		}

		const reader = new FileReader()
		reader.onload = e => {
			$preview.insertAdjacentHTML('afterbegin', previewHTML(e, file))
		}

		$open.after($load)
		reader.readAsDataURL(file || '')
	})
}

export function removeFile(event) {
	const {name} = event.target.dataset
	if (!name) {
		return
	}

	files = files.filter(file => file.name !== name)
	const card = $preview.querySelector(`[data-name="${name}"]`)
		.closest('.preview-image')
	card.remove()

	if (!files.length) {
		$load.remove()
	}
}

export function loadingHandler() {
	$preview.querySelectorAll('.preview-remove')
		.forEach(el => el.remove())
	const previewInfo = $preview.querySelectorAll('.preview-info')
	previewInfo.forEach(changeBlock)
}