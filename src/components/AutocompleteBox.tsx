import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react"
import SuggestionList from "./SuggestionList";
import AutocompleteTerm from "../model/AutocompleteTerm";

interface ParentProps {
    websiteName: string
    userQuery: string
}

const AutocompleteBox: React.FC<ParentProps> = ({ websiteName, userQuery }: any) => {
    const [autocompleteTerms, setAutocompleteTerms] = useState<AutocompleteTerm[]>([])
    
    const populateDummyData = () => {
        const data = ['refrigerator', 'dishwasher', 'lawn mower']
        const newAutocompleteTerms: AutocompleteTerm[] = []
        data.map(item => {
            const newAutocompleteTerm = new AutocompleteTerm()
            newAutocompleteTerm.name = item
            newAutocompleteTerms.push(newAutocompleteTerm)
        })
        setAutocompleteTerms(newAutocompleteTerms)
    }

    return <Box width={500}>
        <Typography variant="h4">{websiteName}</Typography>
        <Button onClick={() => populateDummyData()}>Populate Dummy Data</Button>
        <br/>
        <Input value={userQuery}></Input>
        <SuggestionList data={autocompleteTerms}></SuggestionList>
    </Box>
}

export default AutocompleteBox;