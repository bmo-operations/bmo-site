import { ZipsTip } from "./ZipsTip";

export function getTips(): ZipsTip[] {
    var request = new XMLHttpRequest();
    request.open("GET", `/assets/ztips.json`, false);
    request.send(null)
    return Object.values(JSON.parse(request.responseText))
}