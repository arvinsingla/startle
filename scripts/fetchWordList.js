import * as fs from 'node:fs/promises'
import { format, add } from 'date-fns'
import fetch from 'node-fetch'

const WORDL_API_BASE_URL = "https://www.nytimes.com/svc/wordle/v2"
const WORDL_START_DATE = "2021-06-19:00:00:00"
const ERROR = "ERROR"
const WORD_LIST_FILENAME = 'wordlWordList.json'

async function main() {

    let wordList = {}
    let wordDate = new Date(WORDL_START_DATE)
    let data = {};
    do {
        const wordlApiUrl = `${WORDL_API_BASE_URL}/${format(wordDate, "yyyy-MM-dd")}.json`
        const response = await fetch(wordlApiUrl)
        data = await response.json()
        if (data.solution) wordList[data.solution] = data.print_date
        wordDate = add(wordDate, { days: 1 })
    }
    while(data.status !== ERROR)

    fs.writeFile(WORD_LIST_FILENAME, JSON.stringify(wordList))

}

main()