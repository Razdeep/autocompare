import { useState } from 'react'
import './App.css'
import AutocompleteBox from './components/AutocompleteBox'
import { Input, Stack } from '@mui/material'

function App() {

  const [userQuery, setUserQuery] = useState<string>('')

  const handleUserQueryChange = (e: any) => {
    setUserQuery(e.target.value)
  }

  return (
    <Stack>
      <Input onChange={handleUserQueryChange}></Input>
      <AutocompleteBox userQuery={userQuery}></AutocompleteBox>
    </Stack>
  )
}

export default App
