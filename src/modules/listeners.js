import {$input, $load, $open, $preview} from "./createdElements";

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
			$preview.insertAdjacentHTML('afterbegin', `
				<div class="preview-image">
					<img src="${e.target.result}"/>
				</div>
			`)
		}

		$open.after($load)
		reader.readAsDataURL(file)
	})
}
