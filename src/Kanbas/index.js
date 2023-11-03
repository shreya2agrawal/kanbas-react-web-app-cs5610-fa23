// import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import db from "./Database";
import { useState } from "react";
import store from "./Store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([{ ...course, _id: new Date().getTime(), code: "RS192" }, ...courses]);
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  return (
    <Provider store={store}>
      <div className="d-flex">
        {/* <div> */}
        {/* <h1>Kanbas Navigation</h1> */}
        {/* </div> */}
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses/" element={<Navigate to={"RS101/Home"} />} />
            <Route
              path="Courses/:courseId/*"
              element={<Courses coursesList={courses} />}
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
          </Routes>
          {/* <h1>Account</h1>
        <h1>Dashboard</h1>
        <h1>Courses</h1> */}
        </div>
      </div>
    </Provider>
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
