import React from "react";
import axios from "axios";

class LifeCycleMethod extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "A",
      users: [],
    };
    console.log("Constructor called");
  }

  async fetchData() {
    const res = await axios.get("http://jsonplaceholder.typicode.com/users");
    console.log(res);
    this.setState({ users: res.data });
  }

  componentDidMount() {
    console.log("Mounting...");
    this.fetchData();
  }

  componentDidUpdate() {
    console.log("Updating...");
  }

  componentWillUnmount() {
    console.log("Unmounting...");
  }
  render() {
    console.log("Render method called");
    return (
      <>
        {console.log("UI called", this.state.users)}
        <h1>{this.state.name}</h1>
        <h2> Life Cycle Methods</h2>
        <button
          onClick={() => {
            this.setState({ name: "B" });
          }}
        >
          Change
        </button>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Email Id</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default LifeCycleMethod;
