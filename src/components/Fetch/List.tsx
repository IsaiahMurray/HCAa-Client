import React from "react";

interface Props {
  getLists: () => void;
  list: List;
  deleteList: (text: List) => void;
}

const List: React.FC<Props> = ({ list, getLists, deleteList }) => {
  const handleClick = () => {
    deleteList(list);
  };
  return (
    <div>
      <li key={list.id}>
        {list.title}
        <br />
        {list.description}
      </li>
      <button onClick={handleClick}>Yeet!</button>
    </div>
  );
};

export default List;