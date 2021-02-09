import {$card, $container, $input, $open, $preview} from "./createdElements";

export function createDOM() {
    $container.append($card)
    $card.append($input)
    $input.after($preview)
    $input.after($open)
}