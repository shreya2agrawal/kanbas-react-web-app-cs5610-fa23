import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <div className="wd-dashboard-header display-6">
        <h1>Dashboard</h1>
        <hr style={{ width: "395%" }} />
      </div>
      <div className="wd-published-course-header display-5">
        <h4>Published Courses ({courses.length})</h4>
        <hr style={{ width: "421%" }} />
      </div>
      <div className="flex-container">
        <div className="row d-flex flex-row flex-wrap">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            {/* <a class="wd-card-link" href="../Courses/Home/index.html"> */}
            {courses.map((course, index) => (
              <div className="card">
                <div className="card-header card-header-style">
                  <FontAwesomeIcon icon={"ellipsis-vertical"} style={{float: "right", color: "white"}}></FontAwesomeIcon>
                </div>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ color: "#4682b4", fontSize: "medium" }}
                  >
                    {course.name}
                  </h5>

                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="btn btn-light"
                  >
                    {course.code}
                  </Link>
                  <div class="wd-course-term">{course.term}</div>
                  <p className="card-text">{course.description}</p>
                  <button className="btn btn-transparent" style={{ backgroundColor: 'transparent', color: 'black' }}>
                  <FontAwesomeIcon icon={faFilePen} ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            ))}
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
