import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Accueil } from "./components/Accueil";
import { Users } from "./components/Users";
import Preferences from "./components/Preferences";
import { NotFound } from "./components/NotFound";
type Component = {
  link: string;
  children: React.ReactNode;
  name: string;
};
const components: Component[] = [
  {
    link: "/",
    children: <Accueil />,
    name: "Accueil",
  },
  {
    link: "/users",
    children: <Users />,
    name: "Users",
  },
  {
    link: "/preferences",
    children: <Preferences />,
    name: "Preferences",
  },
];
const notFoundComponent = {
  link: "*",
  children: <NotFound />,
  name: "NotFound",
};

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <h1>Menu</h1>
        <ul>
          {components.map((c) => (
            <li key={c.link}>
              <Link to={c.link}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container">
        <Routes>
          {[...components, notFoundComponent].map((c) => (
            <Route key={c.link} path={c.link} element={c.children} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
