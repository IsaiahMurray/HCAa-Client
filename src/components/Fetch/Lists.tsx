import React, { Component } from "react";
import Modal from "react-modal";
import { Button, TextField } from "@material-ui/core";
import APIURL from "../../helpers/environment";

interface Data {
  lists: any;
  listId: null | number;
  modalIsOpen: boolean;
  activeList: ActiveList;
}

interface ActiveList {
  id: null | number;
  title: string;
  description: string;
}

class Lists extends Component<{ getToken: any }, Data> {
  constructor(props: any) {
    super(props);
    this.deleteList = this.deleteList.bind(this);
    this.setListArray = this.setListArray.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.state = {
      lists: null,
      listId: null,
      modalIsOpen: false,
      activeList: {
        id: null,
        title: "",
        description: "",
      },
    };
  }

  deleteList(id: number, index: number) {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      Authorization: this.props.getToken(),
    };
    fetch(`http://hca-server.herokuapp.com/list/delete/${id}`, {
      method: "DELETE",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.renderLists();
      });

    console.log(this.state.lists);
  }

  renderLists() {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      Authorization: this.props.getToken(),
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

  componentDidMount() {
    this.renderLists();
  }

  setListArray(listResult: List) {
    this.setState({ lists: listResult });
  }

  openModal(list: List) {
    this.setState({ modalIsOpen: true });
    this.setState({ activeList: list });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  setTitle(event: any, newTitle: string) {
    event.preventDefault();
    this.setState({
      activeList: { ...this.state.activeList, title: newTitle },
    });
  }

  setDescription(event: any, newDescription: string) {
    event.preventDefault();
    this.setState({
      activeList: { ...this.state.activeList, description: newDescription },
    });
  }

  handleSubmit(event: any) {
    event.preventDefault();

    let requestHeaders: any = {
      "Content-Type": "application/json",
      Authorization: this.props.getToken(),
    };
    fetch(
      `${APIURL}/list/update/${this.state.activeList.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          title: this.state.activeList.title,
          description: this.state.activeList.description,
        }),
        headers: requestHeaders,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("List has been updated!");
        this.closeModal();
        this.renderLists();
      });
  }

  render() {
    let view;

    if (this.state.lists) {
      view = this.state.lists.map((list: any, index: number) => {
        return (
          <div >
            <div className="list">
              <h2>{list.title}</h2>
              <p>{list.description}</p>
              <br />
              <button onClick={() => this.openModal(list)}>Edit</button>
              <button onClick={() => this.deleteList(list.id, index)}>
                Delete
              </button>
              <br />
            </div>
          </div>
        );
      });
    } else {
      view = (
        <div>
          <h2>No lists yet</h2>
        </div>
      );
    }
    
    return (
      <div>
        <h1>My Lists</h1>
        <div id="list-container">
          {view}
        </div>

        <Modal isOpen={this.state.modalIsOpen}>
          <h2>{this.state.activeList.title}</h2>
          <p>{this.state.activeList.description}</p>

          <form id="edit-list" onSubmit={(e) => this.handleSubmit(e)}>
            <h2>Edit List</h2>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="title"
              label="title"
              onChange={(e) =>
                this.setState({
                  activeList: {
                    ...this.state.activeList,
                    title: e.target.value,
                  },
                })
              }
              name="title"
              value={this.state.activeList.title}
              autoFocus
            />
            <br />
            <TextField
              variant="outlined"
              margin="normal"
              required
              label="description"
              type="text"
              id="description"
              onChange={(e) =>
                this.setState({
                  activeList: {
                    ...this.state.activeList,
                    description: e.target.value,
                  },
                })
              }
              name="description"
              value={this.state.activeList.description}
            />
            <br />
            <Button
              id="list-create-button"
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </form>
          <Button onClick={() => this.closeModal()}>Exit</Button>
        </Modal>
      </div>
    );
  }
}

export default Lists;
