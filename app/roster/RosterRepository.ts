import { Player } from "./Player";
import rosters from "../../public/content/roster/rosters.json"

export function allRosters(): Map<number, Player[] | string> {
    return new Map(Object.entries(rosters).map(e => {
        const year: number = parseInt(e[0])
        const value: Player[] | string = (typeof e[1] == "string") ? e[1] : Object.values(e[1])
        return [year, value]
    }))
}