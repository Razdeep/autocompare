import { useState } from 'react'
import './App.css'
import AutocompleteBox from './components/AutocompleteBox'
import { Input, Stack } from '@mui/material'
import { fetchData as fetchDataFromHomeDepot } from './services/HomeDepotService'
import AutocompleteTerm from './model/AutocompleteTerm'

function App() {

  const [userQuery, setUserQuery] = useState<string>('')
  const [autocompleteTermsLowes, setAutocompleteTermsLowes] = useState<AutocompleteTerm[]>([])
  const [autocompleteTermsHomeDepot, setAutocompleteTermsHomeDepot] = useState<AutocompleteTerm[]>([])

  const handleUserQueryChange = async (e: any) => {
    setUserQuery(e.target.value)
    setAutocompleteTermsHomeDepot(await fetchDataFromHomeDepot(e.target.value))
  }

  return (
    <Stack>
      <Input onChange={handleUserQueryChange}></Input>
      <Stack direction={'row'}>
        <AutocompleteBox websiteName="Lowe's" userQuery={userQuery} autocompleteTerms={autocompleteTermsLowes}></AutocompleteBox>
        <AutocompleteBox websiteName="Home depot" userQuery={userQuery} autocompleteTerms={autocompleteTermsHomeDepot}></AutocompleteBox>
      </Stack>
    </Stack>
  )
}

export default App
