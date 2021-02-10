import {$card, $root, $input, $open, $preview} from "./createdElements"
import {formatBytes} from "../utils/utils"

export function createDOM() {
    $root.append($card)
    $card.append($input)
    $input.after($preview)
    $input.after($open)
}

export function previewHTML(e, file) {
    return `
            <div class="preview-image">
                <div class="preview-remove" data-name="${file.name}">&times</div>
                <img src="${e.target.result}" alt="${file.name}"/>
                <div class="preview-info">
                    <span>${file.name}</span>
                    ${formatBytes(file.size)}
                </div>
            </div>
			`
}