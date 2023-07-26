import AutocompleteTerm from "../model/AutocompleteTerm"

const baseUrl = 'http://localhost:8000'

export const fetchData = async (searchTerm: string, websiteName: str): Promise<AutocompleteTerm[]> => {
    const result: AutocompleteTerm[] = []

    if (websiteName === null || websiteName === '') {
        console.log('websiteName cannot be empty')
        return result
    }

    const parameters = `searchTerm=${searchTerm}`
    const completeUrl = `${baseUrl}/${websiteName}?${parameters}`

    const data = await fetch(completeUrl, {
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
    
    const dataJson = await data.json()
    console.log(dataJson)
    dataJson.data.map(term => {
        const autocompleteTerm = new AutocompleteTerm()
        autocompleteTerm.name = term.name
        result.push(autocompleteTerm)
    })

    return result
}

export default fetchData;