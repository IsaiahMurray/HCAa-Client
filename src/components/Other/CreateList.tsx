import React, { useState } from 'react';

interface Props {
    getLists: () => void
}

const intialState = {
    title: "",
    description: ""
}

const CreateList: React.FC<Props> = ({getLists}) => {
    const [newList, setNewList] = useState<List>(intialState)

    let list = {
        title: newList.title,
        description: newList.description
    }
    
    return(
        <div>
            <h1>Form for creating lists goes here</h1>
        </div>
    )
}

export default CreateList;