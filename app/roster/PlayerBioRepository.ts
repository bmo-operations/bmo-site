import { Player } from "./Player";

export function getPlayerBios(year: number): Player[] {
    var request = new XMLHttpRequest();
    request.open("GET", `/roster/${year}/bios.json`, false);
    request.send(null)
    console.log(request.responseText)
    return Object.values(JSON.parse(request.responseText))
}

export function hasBioJSON(year: number): boolean {
    return year == 2022
}