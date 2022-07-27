import React from "react";
import LifeCycleMethod from "./LifeCycleMethod";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      user: { fname: "", email: "" },
      isToggle: true,
    };
    // this.Increment = this.Increment.bind(this);
  }

  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const decrement = () => {
      this.setState({ count: this.state.count - 1 });
    };

    const reset = () => {
      this.setState({ count: 0 });
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ user: { ...this.state.user, [name]: value } });
    };

    return (
      <>
        <h2>{this.state.count}</h2>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <form action="">
          <input
            type="text"
            placeholder="Please enter your name"
            name="fname"
            onChange={handleChange}
            value={this.state.user.fname}
          />
          <input
            type="email"
            placeholder="Please enter your email"
            name="email"
            onChange={handleChange}
            value={this.state.user.email}
          />
          {JSON.stringify(this.state.user)}

          <button
            onClick={(e) => {
              e.preventDefault();
              this.setState({ isToggle: !this.state.isToggle });
            }}
          >
            Toggle
          </button>
        </form>
        {this.state.isToggle ? <LifeCycleMethod /> : null}
      </>
    );
  }
}

export default ClassComponent;
