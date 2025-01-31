import { BrowserRouter, Route, Routes } from "react-router";
import { lazy } from "react";
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => "./pages/about");
import Team from "./pages/team";
import Contact from "./pages/contact";
import Chat from "./pages/chat";
import NotFound from "./pages/notFound";
import Inbox from "./pages/inbox";
import Signin from "./pages/signin";
import PrivateRoute from "./routes/privateRoute";
import ProtectedRoute from "./routes/protectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/chat/:userid" element={<Chat />} />
          <Route path="/inbox" element={<Inbox />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
