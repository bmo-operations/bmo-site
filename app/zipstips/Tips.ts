import { ZipsTip } from "./ZipsTip";
import tips from "../../public/assets/ztips.json"

var savedTips: ZipsTip[] | null

export function getTips(): ZipsTip[] {
    return tips
    // return fetch(`http://localhost:3000/assets/ztips.json`)
    //     .then(r => Object.values(r.json()))
    // if (savedTips != null) return savedTips
    // const allTips: ZipsTip[] = Object.values(JSON.parse(readFileSync(`/assets/ztips.json`).toString()))
    // savedTips = allTips
    // return savedTips
}

export function randomTip(): ZipsTip {
    // return getTips().then(all => all[Math.floor(Math.random() * all.length)])
    return tips[Math.floor(Math.random() * tips.length)]
}