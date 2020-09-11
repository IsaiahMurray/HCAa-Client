import { Button } from "@material-ui/core";
import React, { Component } from "react";
import Modal from "react-modal";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

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
        resistance: [],
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

  setMonsterArray(monsterResult: any) {
    this.setState({ monsterList: monsterResult });
  }

  openModal(monster: Monster) {
    this.setState({ modalIsOpen: true });
    this.setState({ activeMonster: monster });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
              <button onClick={() => this.openModal(monster)}>
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
          
          <p>Elements: {this.state.activeMonster.elements.map((element: string, index: number) => {
            return(<ul><li>{element}</li></ul>)
          })}</p>

          <p>Ailment: {this.state.activeMonster.ailments.map((ailment: Ailments, index: number) => {
            return(<ul><li>{ailment.name}</li></ul>)
          })}</p>
         
          <p>{this.state.activeMonster.type}</p>
          <Button onClick={() => this.closeModal()}>Exit</Button>
        </Modal>
      </div>
    );
  }
}
export default Monsters;
