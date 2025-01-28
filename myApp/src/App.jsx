import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Chat from "./pages/chat";
import NotFound from "./pages/notFound";
import Inbox from "./pages/inbox";
import Signin from "./pages/signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/chat/:userid" element={<Chat />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
