import React, { Component } from "react";

class Item extends Component<{}, { searchTerm: string; itemList: any }> {
  constructor(props: any) {
    super(props);
    this.fetchItem = this.fetchItem.bind(this);
    this.state = {
      searchTerm: "",
      itemList: null,
    };
  }

  fetchItem() {
    
  }
  handleSubmit(event: any) {
      event.preventDefault();
    // this.setState({ searchTerm: term });
  fetch(`https://mhw-db.com/items?q{"name":"${this.state.searchTerm}"}`)
      .then((res) => res.json())
      .then((data) => console.log(data));

  }
  render() {
    let view;

    if (this.state.itemList) {
      view = this.state.itemList.map((item: any, index: any) => {
        return <h3>{item.name}</h3>;
      });
    } else {
        view = 
            <h2>Do something</h2>
        
    }

    return (
      <div>
        <h1>Item Component</h1>
        <form onSubmit={this.handleSubmit}>
            <input 
            onChange={(e) =>
              this.setState({ ...this.state, searchTerm: e.target.value })}
      
            ></input>
            <button >Search</button>
        </form>
        {view}
      </div>
    );
  }
}

export default Item;
