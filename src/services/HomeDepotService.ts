import AutocompleteTerm from "../model/AutocompleteTerm"

const baseUrl = 'https://www.homedepot.com'
const path = 'TA2/search'

export const fetchData = async (searchTerm: string): Promise<AutocompleteTerm[]> => {
    const parameters = `term=${searchTerm}`
    const completeUrl = `${baseUrl}/${path}?${parameters}`

    const result: AutocompleteTerm[] = []

    const data = await fetch(completeUrl, {
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
    
    const dataJson = await data.json()
    console.log(dataJson)
    dataJson.r.map(term => {
        const autocompleteTerm = new AutocompleteTerm()
        autocompleteTerm.name = term.t
        result.push(autocompleteTerm)
    })


    return result
}

export default fetchData;