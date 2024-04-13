import React, { Component } from "react";

class LifecycleLogger extends Component {
  componentDidMount() {
    console.log("Component mounted");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <div>
        <h1>This Component is Mounted</h1>
      </div>
    );
  }
}

export default LifecycleLogger;
