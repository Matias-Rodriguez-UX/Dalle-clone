import { surpriseMePrompts } from '../constants'
import FileSaver from 'file-saver'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPropmt = surpriseMePrompts[randomIndex]
    if (randomPropmt === prompt) return getRandomPrompt(prompt)
    return randomPropmt
}

export async function downloadImage(id, photo) {
    FileSaver.saveAs(photo, `download-${id}.jpg`)
}