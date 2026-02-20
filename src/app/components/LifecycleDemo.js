import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Component is loading..." };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: "Component has mounted!" });
    }, 2000);
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
      </>
    );
  }
}

export default LifecycleDemo;
