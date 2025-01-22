import { Component } from "react";

class ClassCounter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.onAdd = this.onAdd.bind(this);
    this.onSub = this.onSub.bind(this);
  }

  onAdd() {
    this.setState({ count: this.state.count + 1 });
  }
  onSub() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1> Counter {this.state.count} </h1>
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onSub}>Sub</button>
      </div>
    );
  }
}
export default ClassCounter;
