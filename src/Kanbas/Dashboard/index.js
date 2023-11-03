import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db from "../Database";
import "./index.css";
import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";

function Dashboard ({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  
  //const courses = db.courses;
  return (
    <div>
      <div className="wd-dashboard-header display-6">
        <h1>Dashboard</h1>
        <hr style={{ width: "140%" }} />
      </div>
      <div className="wd-published-course-header display-5">
        <h4>Published Courses ({courses.length})</h4>
        <hr style={{ width: "141%" }} />
      </div>
      <div className="flex-container">
        <div className="row d-flex flex-row flex-wrap">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            {/* <a class="wd-card-link" href="../Courses/Home/index.html"> */}

            {/* Assignment-4 : ADD COURSE FEATURE */}
            <div
              className="row no-gutters flex-lg-nowrap"
              style={{ marginLeft: "48px" }}
            >
              <h4>New Course</h4>
              <input
                value={course.name}
                className="form-control wd-new-course-form"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
              />
              <input
                value={course.number}
                className="form-control wd-new-course-form"
                onChange={(e) =>
                  setCourse({ ...course, number: e.target.value })
                }
              />
              <input
                value={course.startDate}
                className="form-control wd-new-course-form"
                type="date"
                onChange={(e) =>
                  setCourse({ ...course, startDate: e.target.value })
                }
              />
              <input
                value={course.endDate}
                className="form-control wd-new-course-form"
                type="date"
                onChange={(e) =>
                  setCourse({ ...course, endDate: e.target.value })
                }
              />
            </div>

            <br />

            <div
              className="row no-gutters flex-lg-nowrap"
              style={{ marginLeft: "48px" }}
            >
              <button
                className="btn btn-success wd-new-course-form float-end"
                onClick={addNewCourse}
              >
                Add
              </button>
              <button
                className="btn btn-primary wd-new-course-form float-end"
                onClick={updateCourse}
              >
                Update
              </button>
            </div>
            <br />
            <div>
              {courses.map((course, index) => (
                <div className="card">
                  <div className="card-header card-header-style">
                    <FontAwesomeIcon
                      icon={"ellipsis-vertical"}
                      style={{ float: "right", color: "white" }}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{ color: "#4682b4", fontSize: "medium" }}
                    >
                      <button
                        className="btn btn-danger btn-sm float-end"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
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
                    <button
                      className="btn btn-warning"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      style={{ backgroundColor: "transparent", color: "black" }}
                    >
                      <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>{" "}
                      &nbsp; Edit
                    </button>
                  </div>
                </div>
              ))}
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
