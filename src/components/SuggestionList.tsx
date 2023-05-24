import React from 'react'
import AutocompleteTerm from '../model/AutocompleteTerm';
import { Stack } from '@mui/material';

interface ParentProps {
    data: AutocompleteTerm[]
}

const SuggestionList: React.FC<ParentProps> = ({ data }: ParentProps) => {
    return <Stack>
    {
        data && data.map(item => <span>{item.name}</span>)
    }
    </Stack>
}

export default SuggestionList;