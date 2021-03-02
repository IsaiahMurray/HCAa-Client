import { TextField, Button } from "@material-ui/core";
import React from "react";
import { Component } from "react";
import APIURL from "../../helpers/environment";

class EditList extends Component<{ getToken: any; listId: number | null }, {}> {
  constructor(props: any) {
    super(props);
    this.setDescription = this.setDescription.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.state = {
      listId: this.props.listId,
    };
  }

  componentDidMount() {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      Authorization: this.props.getToken(),
    };
    fetch(`${APIURL}/list/update/${this.props.listId}`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  setTitle(listTitle: string) {
    this.setState({ title: listTitle });
  }

  setDescription(listDescription: string) {
    this.setState({ description: listDescription });
  }

  handleSubmit(id: number) {}

  render() {
    return (
      <div>
        <h2>edit form</h2>
        <form id="create-list" onSubmit={() => this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="title"
            label="Title"
            onChange={(e) =>
              this.setState({ ...this.state, title: e.target.value })
            }
            name="title"
            autoFocus
          />
          <br />
          <TextField
            variant="outlined"
            margin="normal"
            required
            label="Description"
            type="text"
            id="description"
            onChange={(e) =>
              this.setState({ ...this.state, description: e.target.value })
            }
            name="description"
          />
          <br />
          <Button
            id="list-create-button"
            type="submit"
            variant="contained"
            color="primary"
          >
            Create List
          </Button>
        </form>
      </div>
    );
  }
}

export default EditList;
