import { ZipsTip } from "./ZipsTip";
import tips from "../../public/content/zipstips/ztips.json"

export function getTips(): ZipsTip[] {
    return tips
}

export function randomTip(): ZipsTip {
    return tips[Math.floor(Math.random() * tips.length)]
}

export function todaysTip(): ZipsTip | undefined {
	const today = new Date()
	const todayMonth = today.getMonth() + 1
	const todayDay = today.getDate()
	console.log(`getting tip for ${todayMonth}/${todayDay}`)
	return tips.find(t => {
		const [month, day, _] = t.date.split("/")
		return (parseInt(month) == todayMonth) && (parseInt(day) == todayDay)
	})
}