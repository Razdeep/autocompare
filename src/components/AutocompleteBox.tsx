import { Button, Input } from "@mui/material";
import React, { useState } from "react"
import SuggestionList from "./SuggestionList";
import AutocompleteTerm from "../model/AutocompleteTerm";

interface ParentProps {
    userQuery: string
}

const AutocompleteBox: React.FC<ParentProps> = ({ userQuery }: any) => {
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

    return <>
        <Button onClick={() => populateDummyData()}>Populate Dummy Data</Button>
        <br/>
        <Input value={userQuery}></Input>
        <SuggestionList data={autocompleteTerms}></SuggestionList>
    </>
}

export default AutocompleteBox;