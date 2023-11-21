import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  // const URL = "http://localhost:4000/a5/assignment";
  // const URL_local = "http://localhost:4000/a5/assignment";
  // const URL_global = "https://kanbas-node-server-app-tth1.onrender.com/a5/assignment";
  const API_BASE = process.env.REACT_APP_LAB_BASE;
  const URL_global = `${API_BASE}/a5/assignment`;
  
  const fetchAssignment = async() => {
    const response = await axios.get(`${URL_global}`);
    setAssignment(response.data);
  };
  const updateTitle = async() => {
    const response = await axios.get(`${URL_global}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect( () => {fetchAssignment();}, []);
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        href="http://localhost:4000/a5/assignment"
        className="btn btn-primary me-2"
      >
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href="http://localhost:4000/a5/assignment/title"
        className="btn btn-primary me-2"
      >
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL_global}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />
      // UPDATING SCORE: EXTRA CREDIT - 1
      <a
        href={`${URL_global}/score/${assignment.score}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Score
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number"
      />
      // UPDATING COMPLETED: EXTRA CREDIT - 2
      <a
        href={`${URL_global}/completed/${assignment.completed}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Completed
      </a>
      <label for="checkboxCompleted">Completed</label>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        id="checkboxCompleted"
        checked={assignment.completed}
        type="checkbox"
      />
      <h2> FETCHING AND UPDATING OBJECTS: RECEIVING DATA FROM SERVERS AS HTTP RESPONSES </h2>
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
    </div>
  );
}
export default WorkingWithObjects;
