import { ZipsTip } from "./ZipsTip";
import tips from "../../public/content/zipstips/ztips.json"

export function getTips(): ZipsTip[] {
    return tips
}

export function randomTip(): ZipsTip {
    return tips[Math.floor(Math.random() * tips.length)]
}