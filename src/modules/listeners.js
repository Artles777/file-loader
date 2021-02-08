import {$input, $open} from "./createdElements";

export function triggerFiles() {
    return $input.click()
}

export function loadFiles(event) {
	const files = Array.from(event.target.files)
	files.forEach(file => {
		if (!file.type.match('image')) {
			return
		}

		const reader = new FileReader()
		reader.onload = e => {
			$open.insertAdjacentHTML('afterend', `<img src="${e.target.result}"/>`)
		}

		reader.readAsDataURL(file)
	})
}
