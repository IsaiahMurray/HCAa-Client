import { Button } from "@material-ui/core";
import React, { Component } from "react";
import Modal from "react-modal";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

interface Data {
  modalIsOpen: boolean;
  activeMonster: Monster;
  monsterList: any;
}

class Monsters extends Component<{}, Data> {
  constructor(props: any) {
    super(props);
    this.setMonsterArray = this.setMonsterArray.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      modalIsOpen: false,
      monsterList: null,
      activeMonster: {
        id: null,
        name: "",
        type: "",
        species: "",
        description: "",
        elements: [],
        ailments: [],
        locations: [],
        resistances: [],
        weaknesses: [],
        rewards: [],
      },
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

  setMonsterArray(monsterResult: Monster[]) {
    this.setState({ monsterList: monsterResult });
  }

  openModal(monster: Monster, id: number) {
    fetch(`https://mhw-db.com/monsters/${id}`)
    .then(res => res.json())
    .then(data => console.log(data) )
    this.setState({ modalIsOpen: true });
    this.setState({ activeMonster: monster });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  getMonsterRewards(id: number){
    fetch(`https://mhw-db.com/monsters/${id}`)
    .then(res => res.json())
    .then(data => {
      
    })
  }

  render() {
    let view;

    if (this.state.monsterList) {
      view = this.state.monsterList.map((monster: any, index: any) => {
        return (
          <Grid id="monster-grid">
            <Paper id="monster-paper">
              <h2>{monster.name}</h2>
              <p>{monster.description}</p>
              <button onClick={() => this.openModal(monster, monster.id)}>
                View Details
              </button>
            </Paper>
          </Grid>
        );
      });
    } else {
      view = <div>Hold on... Doing the thing...</div>;
    }

    return (
      <div>
        <h1>Monsters Comopnent</h1>
        <div id="monster-view">{view}</div>

        <Modal isOpen={this.state.modalIsOpen}>
          <h1>{this.state.activeMonster.name}</h1>

          <h3>Species: {this.state.activeMonster.species}</h3>

          <h3>Type: {this.state.activeMonster.type}</h3>

          <p>Description: {this.state.activeMonster.description}</p>

          <p>
            Elements:{" "}
            {this.state.activeMonster.elements.map(
              (element: string, index: number) => {
                return (
                  <ul>
                    <li>{element}</li>
                  </ul>
                );
              }
            )}
          </p>

          <p>
            Ailment:{" "}
            {this.state.activeMonster.ailments.map(
              (ailment: Ailments, index: number) => {
                return (
                  <ul>
                    <li>{ailment.name}</li>
                  </ul>
                );
              }
            )}
          </p>

          <p>
            Resistances:{" "}
            {this.state.activeMonster.resistances.map(
              (resistance: MonsterResistance, index: number) => {
                return (
                  <ul>
                    <li>{resistance.element}</li>
                  </ul>
                );
              }
            )}
          </p>

          <p>
            Weaknesses:{" "}
            {this.state.activeMonster.weaknesses.map(
              (weakness: MonsterWeakness, index: number) => {
                return (
                  <ul>
                    <li>
                      {weakness.element}: {weakness.stars}/5
                    </li>
                  </ul>
                );
              }
            )}
          </p>

          <p>
            Rewards:{" "}
            {this.state.activeMonster.rewards.map(
              (reward: MonsterReward, index: number) => {
                return (
                  <ul>
                    <li>
                      {reward.item} ={">"}{" "}
                    </li>
                  </ul>
                );
              }
            )}
          </p>
          
          <Button onClick={() => this.closeModal()}>Exit</Button>
        </Modal>
      </div>
    );
  }
}
export default Monsters;
