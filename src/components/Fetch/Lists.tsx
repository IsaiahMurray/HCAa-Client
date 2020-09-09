import React, { useState, useEffect } from "react";
import List from '../Fetch/List';

interface Props {
    getLists: () => void,
    deleteList: (text:List) => void
    lists:List[]
}

const Lists: React.FC<Props> = ({getLists, deleteList, lists}) => {
  
  return (
    <div>
      <h1>List Component</h1>

        {lists.map((lists) => (
          <div key={lists.id}>
            <h2>{lists.title}</h2>
            <p>{lists.description}</p>
          </div>
        ))}
      
    </div>
  );
};

export default Lists;
