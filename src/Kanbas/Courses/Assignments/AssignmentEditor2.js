// import React from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import db from "../../Database";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addAssignment,
//   updateAssignment,
//   setAssignment,
// } from "../Assignments/assignmentsReducer";

// function AssignmentEditor() {
//   const { assignmentId } = useParams();
//   const assignments = useSelector(
//     (state) => state.assignmentsReducer.assignments
//   );
//   const assignment = useSelector(
//     (state) => state.assignmentsReducer.assignment
//   );
//   const dispatch = useDispatch();

//   const { courseId } = useParams();
//   const navigate = useNavigate();

//   const handleSave = () => {
//     const existingAssignment = assignments.find(
//       (ass) => ass._id === assignmentId
//     );
//     if (existingAssignment) {
//       dispatch(updateAssignment(assignment));
//     } else {
//       dispatch(addAssignment(assignment));
//     }
//     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//   };

//   return (
//     <div>
//       <h2>Assignment Name</h2>
//       <br />
//       <input value={assignment.title} className="form-control mb-2" placeholder="NEW ASSIGNMENT" />
//       <Link
//         to={`/Kanbas/Courses/${courseId}/Assignments`}
//         className="btn btn-danger"
//       >
//         Cancel
//       </Link>
//       &nbsp;
//       {/* <Link onClick={handleSave}
//             to={`/Kanbas/Courses/${courseId}/Assignments`}
//             className="btn btn-success me-2">
//         Save
//       </Link> */}
//       <button onClick={handleSave} className="btn btn-success me-2">
//         Save
//       </button>
//     </div>
//   );
// }

// export default AssignmentEditor;
