import Assignment3 from "./a3";
// import { Link } from "react-router-dom";
import Nav from "../Nav";
import Assignment4 from "./a4";
import { Routes, Route, Navigate } from "react-router";
import store from "./a4/store";
import { Provider } from "react-redux";

function Labs() {
  return (
    <Provider store={store}>
      <div>
        {/* <Link to="/hello">Hello</Link> |<Link to="/Labs/a3">A3</Link> |
      <Link to="/Kanbas">Kanbas</Link> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default Labs;
