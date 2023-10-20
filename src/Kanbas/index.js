// import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      {/* <div> */}
      {/* <h1>Kanbas Navigation</h1> */}
      {/* </div> */}
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/" element={<Navigate to={"RS101/Home"} />} /> 
          <Route path="Courses/:courseId/*" element={<Courses />} /> 
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
        {/* <h1>Account</h1>
        <h1>Dashboard</h1>
        <h1>Courses</h1> */}
      </div>
    </div>
  );
}
export default Kanbas;

// function Kanbas() {
//   return (
//     <div>
//       {/* <Link to="/hello">Hello</Link> |<Link to="/Labs/a3">A3</Link> |
//       <Link to="/Kanbas">Kanbas</Link> */}
//       <Nav />
//       <h1>Kanbas</h1>
//     </div>
//   );
// }

// export default Kanbas;
