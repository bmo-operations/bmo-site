import { ZipsTip } from "./ZipsTip";

var savedTips: ZipsTip[] | null

export function getTips(): ZipsTip[] {
    if (savedTips != null) return savedTips
    var request = new XMLHttpRequest();
    request.open("GET", `/assets/ztips.json`, false);
    request.send(null)
    const allTips: ZipsTip[] = Object.values(JSON.parse(request.responseText))
    savedTips = allTips
    return savedTips
}

export function randomTip(): ZipsTip {
    const allTips = getTips()
    return allTips[Math.floor(Math.random() * allTips.length)]
}