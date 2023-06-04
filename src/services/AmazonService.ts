import AutocompleteTerm from "../model/AutocompleteTerm"

const baseUrl = 'https://origin-completion.amazon.in'
const path = 'api/2017/suggestions'
const defaultParams = 'limit=11&suggestion-type=WIDGET&suggestion-type=KEYWORD&page-type=Gateway&alias=aps&site-variant=desktop&version=3&event=onkeypress&wc=&lop=en_IN&last-prefix=re&avg-ks-time=29966&fb=1&session-id=257-9914362-9137250&request-id=HW69TAMQWTEFNHE269NZ&mid=A21TJRUUN4KGV&plain-mid=44571&client-info=amazon-search-ui'

export const fetchData = async (searchTerm: string): Promise<AutocompleteTerm[]> => {
    const parameters = `${defaultParams}&prefix=${searchTerm}`
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
    dataJson.suggestions.map(term => {
        const autocompleteTerm = new AutocompleteTerm()
        autocompleteTerm.name = term.value
        result.push(autocompleteTerm)
    })


    return result
}

export default fetchData;