import Navbar from "./comps/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./comps/Home";
import Projects from "./comps/Projects";
import Aboutme from "./comps/Aboutme";
import urls from "./url";

function App() {
  return (
    <body>
      <Navbar></Navbar>

      <div className="page_wrapper">
        <Routes>
          <Route path={urls.home} element={<Home></Home>}></Route>
          <Route path={urls.about_me} element={<Aboutme></Aboutme>}></Route>
          <Route path={urls.projects} element={<Projects></Projects>}></Route>
        </Routes>
      </div>
    </body>
  );
}

export default App;
