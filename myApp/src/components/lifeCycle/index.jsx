import { Component, PureComponent } from "react";

let intervalId = null;

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("Hey");
    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    console.log("Mounted");
    this.onStart();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should update?");
    if (nextState.timer > 10) {
      return false;
    }
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState);
    return null;
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmount");
    clearInterval(intervalId);
  }
  onStart() {
    intervalId = setInterval(() => {
      console.log("Interval");
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  render() {
    console.log("Render");
    const { timer } = this.state;
    return (
      <div>
        <h1>LifeCycle</h1>

        <p>{timer}</p>

        <button>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default LifeCycle;
