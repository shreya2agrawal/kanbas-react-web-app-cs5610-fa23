import React, { useState } from "react";

function ObjectStateVariable() {
  // Setting useState() hook and initializing course object
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  const [course, setCourse] = useState({
    title: "React",
    modules: 5,
    isPublished: true,
    startDate: new Date(),
  });
  // INDIVIDUAL handleTitleChange HANDLER : TEDIOUS
  const handleTitleChange = (event) => {
    setCourse({ ...course, title: event.target.value });
  };
  // INDIVIDUAL handleModulesChange HANDLER : TEDIOUS
  const handleModulesChange = (event) => {
    setCourse({ ...course, modules: event.target.value });
  };
  // ALTERNATIVE: OBJECT CHANGE HANDLER
  return (
    <div>
      <h2>Object State Variable</h2>
      <input
        className="form-control"
        value={person.name}
        onChange={(event) => setPerson({ ...person, name: event.target.value })}
      />
      <input
        className="form-control"
        value={person.age}
        onChange={(event) => setPerson({ ...person, age: event.target.value })}
      />
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        className="form-control"
        onChange={handleTitleChange}
        value={course.title}
      />
      <input
        className="form-control"
        onChange={handleModulesChange}
        value={course.modules}
      />
      <input
        className="form-control"
        onChange={(event) => {
          setCourse({ ...course, isPublished: event.target.value });
        }}
        value={course.isPublished}
      />
      <input
        className="form-control"
        onChange={(event) => {
          setCourse({ ...course, startDate: event.target.value });
        }}
        value={course.startDate}
      />
      <pre>{JSON.stringify(course, null, 2)}</pre>
    </div>
  );
}

export default ObjectStateVariable;
