import React, { Component } from "react";
//import List from "../Fetch/List";

// interface Props {
//   getLists: any;
//   deleteList: any;
// }

//class Lists extends Component<{getLists: any; deleteList: any}> {
class Lists extends Component<{getToken: any;}> {
  constructor(props: any) {
    super(props);

    //this.getToken = this.getToken.bind(this);
    //this.getLists = this.getLists.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.setListArray = this.setListArray.bind(this);

    this.state = {
      lists: null
    }
  }

  // getToken(){
  //   this.getToken();
  // }
  
  

  // getLists() {
  //   let requestHeaders: any = {
  //     "Content-Type": "application/json",
  //     "Authorization": this.getToken(),
  //   };
  //   fetch(`http://hca-server.herokuapp.com/list`, {
  //     method: "GET",
  //     headers: requestHeaders,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }

  deleteList() {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      "Authorization": this.props.getToken(),
    };
    //fetch(`http://hca-server.herokuapp.com/list/delete/${list.id}`,
    fetch(`http://hca-server.herokuapp.com/list/delete/`, {
      method: "DELETE",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        //this.getLists();
      });
  }


  componentDidMount(){
    console.log("mounted");
    let requestHeaders: any = {
      "Content-Type": "application/json",
      "Authorization": this.props.getToken(),
    };
    fetch(`http://hca-server.herokuapp.com/list`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        this.setListArray(data);
        console.log(data);
      });
  }

  setListArray(listResult: any){
    this.setState({lists: listResult});
  }

  render() {
    let view;
    return (
      <div>
        <h1>List Component</h1>
        {view}
      </div>
    );
  }
}

export default Lists;
