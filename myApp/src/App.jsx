import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Inbox from "./components/inbox";

const App = () => {
  return (
    <React.Fragment>
      <Header logo={"My Bot"} />
      <Inbox />
      <Footer />
    </React.Fragment>
  );
};

export default App;
