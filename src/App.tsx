import { useState } from 'react'
import './App.css'
import AutocompleteBox from './components/AutocompleteBox'
import { Input, Stack } from '@mui/material'
import { fetchData as fetchDataFromHomeDepot } from './services/HomeDepotService'
import { fetchData as fetchDataFromLowes } from './services/LowesService'
import { fetchData as fetchDataFromAmazon } from './services/AmazonService'
import AutocompleteTerm from './model/AutocompleteTerm'

function App() {

  const [userQuery, setUserQuery] = useState<string>('')
  const [autocompleteTermsLowes, setAutocompleteTermsLowes] = useState<AutocompleteTerm[]>([])
  const [autocompleteTermsHomeDepot, setAutocompleteTermsHomeDepot] = useState<AutocompleteTerm[]>([])
  const [autocompleteTermsAmazon, setAutocompleteTermsAmazon] = useState<AutocompleteTerm[]>([])

  const handleUserQueryChange = async (e: any) => {
    setUserQuery(e.target.value)
    setAutocompleteTermsLowes(await fetchDataFromLowes(e.target.value))
    setAutocompleteTermsHomeDepot(await fetchDataFromHomeDepot(e.target.value))
    setAutocompleteTermsAmazon(await fetchDataFromAmazon(e.target.value))
  }

  return (
    <Stack>
      <Input onChange={handleUserQueryChange}></Input>
      <Stack direction={'row'}>
        <AutocompleteBox websiteName="Lowe's" userQuery={userQuery} autocompleteTerms={autocompleteTermsLowes}></AutocompleteBox>
        <AutocompleteBox websiteName="Home depot" userQuery={userQuery} autocompleteTerms={autocompleteTermsHomeDepot}></AutocompleteBox>
        <AutocompleteBox websiteName="Amazon" userQuery={userQuery} autocompleteTerms={autocompleteTermsAmazon}></AutocompleteBox>
      </Stack>
    </Stack>
  )
}

export default App
