import AutocompleteTerm from "../model/AutocompleteTerm"

const baseUrl = 'https://www.lowes.com'
const path = 'LowesSearchServices/resources/autocomplete/v2_0'

export const fetchData = (searchTerm: string): AutocompleteTerm[] => {
    const parameters = `searchTerm=${searchTerm}&maxTerms=8`
    const completeUrl = `${baseUrl}/${path}?${parameters}`

    const result: AutocompleteTerm[] = []

    fetch(completeUrl, {
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }).then(data => {
        const dataJson = data.json()
        console.log(dataJson)
        // dataJson['terms'].map(term => {
        //     const autocompleteTerm = new AutocompleteTerm()
        //     autocompleteTerm.name = term.name
        //     result.push(autocompleteTerm)
        // })
    })

    return result
}

export default fetchData;