import React, { useEffect, useState } from "react";
//import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Site/Navbar";

type AcceptedProps = {
  deleteToken: () => void;
};


//const accessToken = localStorage.getItem("token")!.toString();

export const Display = ({ deleteToken }: AcceptedProps) => {
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    if (lists) {
      fetch(`http://hca-server.herokuapp.com/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")!.toString()
        },
      })
        .then((res) => res.json())
        .then((json) => setLists(json));
      getLists();
    }
  }, []);

  const getLists = () => {
    setLists([]);
    fetch(`http://hca-server.herokuapp.com/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")!.toString()
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setLists(json);
      });
  };

  const deleteList = (list: List) => {
    let url = `http://hca-server.herokuapp.com/list/delete/${list.id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")!.toString()
      },
    })
      .then((res) => res.json())
      .then(() => getLists());
  };

  return (
    <div>
      <Navbar />
      <Router>
        {/* <Sidebar deleteList={deleteList} getLists={getLists} lists={lists} /> */}
      </Router>
    </div>
  );
};

export default Display;
