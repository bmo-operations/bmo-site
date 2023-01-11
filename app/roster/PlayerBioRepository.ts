import { Player } from "./Player";
import roster2022 from "../../public/roster/2022/bios.json"

export function getPlayerBios(year: number): Player[] {
    return Object.values(roster2022)
    // return fetch(`/roster/${year}/bios.json`).then(r => r.json())
    // return Object.values(JSON.parse(readFileSync(`/roster/${year}/bios.json`).toString()))
}

export function hasBioJSON(year: number): boolean {
    return year == 2022
    // return existsSync(`/roster/${year}/bios.json`)
}