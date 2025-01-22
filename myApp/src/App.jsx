import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Inbox from "./components/inbox";
import Counter from "./components/counter";
import ClassCounter from "./components/classCounter";

const App = () => {
  return (
    <React.Fragment>
      <Header logo={"My Bot"} />
      {/* <Counter /> */}
      <ClassCounter />
      <Inbox />
      <Footer />
    </React.Fragment>
  );
};

export default App;
