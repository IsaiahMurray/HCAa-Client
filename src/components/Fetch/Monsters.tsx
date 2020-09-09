import React, { Component } from "react";
//import Monster from "../Fetch/Monster";

class Monsters extends Component<{}, { monsterList: any }> {
  constructor(props: any) {
    super(props);
    this.setMonsterArray = this.setMonsterArray.bind(this);
    this.state = {
      monsterList: null
    };
  }

  componentDidMount() {
    fetch(`https://mhw-db.com/monsters`)
      .then((res) => res.json())
      .then((data) => {
        this.setMonsterArray(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  setMonsterArray(monsterResult: any) {
    this.setState({ monsterList: monsterResult });
  }

  render() {
    let view;

    if (this.state.monsterList) {
      view = this.state.monsterList.map((monster: any, index: any) => {
        return (
          <div>
            <h2>{monster.name}</h2>
          </div>
        );
      });
    } else {
      view = <div>Didn't do the thing</div>;
    }

    return (
      <div>
        <h1>Monsters Comopnent</h1>
        {/* <Monster /> */}
        {view}
      </div>
    );
  }
}
export default Monsters;
