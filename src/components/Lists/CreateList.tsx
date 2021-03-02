import { TextField, Button } from "@material-ui/core";
import React from "react";
import { Component } from "react";
import APIURL from "../../helpers/environment";

class CreateList extends Component<
  { getToken: any },
  { title: string; description: string }
> {
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "",
      description: "",
    };
  }

  handleSubmit(event: any) {
    event.preventDefault();
    let requestHeaders: any = {
      "Content-Type": "application/json",
      Authorization: this.props.getToken(),
    };

    fetch(`${APIURL}/list/create`, {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
      }),
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        alert("Your list has been created!");
      });
  }

  componentDidMount() {}

  render() {
    return (
      <div id="create-list">
        <form id="create-list" onSubmit={this.handleSubmit}>
          <h2 id="login-signup-header">Create New List</h2>
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
            value={this.state.title}
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
            value={this.state.description}
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

// const CreateList: React.FC<Props> = ({getLists}) => {
//     const [newList, setNewList] = useState<List>(intialState)

//     let list = {
//         title: newList.title,
//         description: newList.description
//     }

//     return(
//         <div>
//             <h1>Form for creating lists goes here</h1>
//         </div>
//     )
// }

export default CreateList;
