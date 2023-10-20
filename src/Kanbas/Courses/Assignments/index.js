// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import db from "../../Database";

// function Assignments() {
//   const { courseId } = useParams();
//   const assignments = db.assignments;
//   const courseAssignments = assignments.filter(
//     (assignment) => assignment.course === courseId);
//   return (
//     <div>
//       <h2>Assignments for course {courseId}</h2>
//       <div className="list-group">
//         {courseAssignments.map((assignment) => (
//           <Link
//             key={assignment._id}
//             to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
//             className="list-group-item">
//             {assignment.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Assignments;
import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheckCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './index.css';


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    assignment => assignment.course === courseId
  );

  return (
    <div>
        <h2>Assignments for course {courseId}</h2>
        <br />
        <div className="flex-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <input type="text" placeholder="Search for Assignment..." style={{ height: "35px"}} />
            <div style={{ display: "flex", marginLeft: '10px' }}>
                <button className="btn btn-secondary custom-btn" style={{ height: "35px", marginRight: '5px' }}>
                    <i className="fas fa-plus"></i> + Group
                </button>
                
                <button className="btn btn-danger" style={{ height: "35px", marginRight: '5px' }}>
                    <i className="fas fa-plus"></i> Assignment
                </button>
                
                <button className="btn btn-secondary custom-btn" style={{ width: "0.8cm", height: "35px", marginRight: '5px' }}>
                    <b>⋮</b>
                </button>
            </div>
        </div>
      <div style={{ textAlign: "left" }}>
      </div>
      <hr />
      <ul className="list-group" style={{flex: '1'}}>
        <li className="list-group-item list-group-item-secondary custom-grey-bg">
          <div className="flex-container">
            <b>Assignments</b>
          </div>
        </li>
      </ul>
      <ul className="list-group" style={{flex: '1'}}>
        {courseAssignments.map((assignment) => (
          <li className="list-group-item" key={assignment._id}>
            <div className="flex-container">
              <i className="far fa-list-alt" style={{ color: "#00b900", marginRight: "20px" }}></i>
              <div style={{ flex: 1 }}>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ color: "black", fontSize: "14px" }}>
                  <b>{assignment.title}</b>
                </Link>
                <br />
                <span style={{ fontSize: "10px", color: "red"}}>{assignment._id} : {assignment.course}&nbsp;&nbsp;</span>
                <span style={{ fontSize: "10px" }}>|&nbsp;&nbsp; <b>Due</b>&nbsp;&nbsp;{assignment.due}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#00a600' }} />
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faEllipsisV} style={{ color: '#787878' }} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;