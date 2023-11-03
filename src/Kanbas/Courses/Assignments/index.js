import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faCheckCircle,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const courseAssignments = assignments.filter(
    (ass) => ass.course === courseId
  );
  const dispatch = useDispatch();

  const handleAddAssignment = () => {
    const newAssignment = {
      title: "New Assingment",
      description: "New Assignment Description",
      course: courseId,
      _id: new Date().getTime().toString(),
    };
    dispatch(setAssignment(newAssignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${newAssignment._id}`);
  };

  const handleDeleteAssignment = (assignmentId) => {
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <br />
      <div
        className="flex-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search for Assignment..."
          style={{ height: "35px", width: "50%" }}
        />
        <div style={{ display: "flex", marginLeft: "10px" }}>
          <button
            className="btn btn-secondary custom-btn"
            style={{ height: "35px", marginRight: "5px" }}
          >
            <i className="fas fa-plus"></i> + Group
          </button>

          <button
            className="btn btn-danger"
            style={{ height: "35px", marginRight: "5px" }}
            onClick={handleAddAssignment}
          >
            <i className="fas fa-plus"></i> + Assignment
          </button>

          <button
            className="btn btn-secondary custom-btn"
            style={{ width: "0.8cm", height: "35px", marginRight: "5px" }}
          >
            <b>⋮</b>
          </button>
        </div>
      </div>
      <div style={{ textAlign: "left" }}></div>
      <hr />
      <ul className="list-group" style={{ flex: "1" }}>
        <li className="list-group-item list-group-item-secondary custom-grey-bg">
          <div className="flex-container">
            <b>Assignments</b>
          </div>
        </li>
      </ul>
      <ul className="list-group" style={{ flex: "1" }}>
        {courseAssignments.map((assignment) => (
          <li className="list-group-item wd-all-assignments" key={assignment._id}>
            <div className="flex-container wd-all-assignments">
              <i
                className="far fa-list-alt"
                style={{ color: "#00b900", marginRight: "20px" }}
              ></i>
              <div style={{ flex: 1 }} className="wd-all-assignments">
                <Link
                  key={assignment._id}
                  onClick={() => dispatch(setAssignment(assignment))}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  style={{ color: "black", fontSize: "14px" }}
                >
                  <FontAwesomeIcon icon={faPenToSquare} style={{ color: "red" }} className="fa-regular icon-margin" />
                  &nbsp;
                  <b>{assignment.title}</b>
                </Link>
                <br />
                <span style={{ fontSize: "10px", color: "grey" }}>
                  {assignment._id} : {assignment.course}&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "10px" }}>
                  |&nbsp;&nbsp; <b>Due</b>&nbsp;&nbsp;{assignment.due}
                </span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: "#00a600" }}
                />
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{ color: "#787878" }}
                />
                &nbsp; &nbsp;
                <button
                  className="btn btn-danger icon-margin"
                  onClick={() => handleDeleteAssignment(assignment._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
