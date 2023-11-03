import React, { useState } from "react";

function ArrayStateVariable() {
  const [modules, setModules] = useState(["Module1", "Module2"]);
  const [newModule, setNewModule] = useState("");
  const [editModuleIndex, setEditModuleIndex] = useState(-1);
  const addModule = () => {
    setModules([...modules, newModule]);
  };
  const deleteModule = (index) => {
    const newModules = modules.filter((module, i) => i !== index);
    setModules(newModules);
  };
  const updateModule = () => {
    const newModules = modules.map(
        (module, index) => {
            if(index === editModuleIndex){
                return newModule;
            } else {
                return module;
            }
        });
        setModules(newModules);
  };
  return (
    <div>
      <h2> Array State Variable </h2>
      <button className="btn btn-info float-end" onClick={updateModule}>
        Update
      </button>
      <button
        className="btn btn-success float-end"
        // onClick={() => setModules([...modules, "New Module"])}
        onClick={addModule}
      >
        Add Module
      </button>
      <input
        className="form-control w-50"
        value={newModule}
        onChange={(e) => {
          setNewModule(e.target.value);
        }}
      />

      <ul className="list-group">
        {modules.map((module, index) => (
          <li key={index} className="list-group-item">
            {index} &nbsp; {module}
            <button
              className="btn btn-danger float-end"
              onClick={() => deleteModule(index)}
            >
              {" "}
              Delete{" "}
            </button>
            <button
              className="btn btn-warning float-end"
              onClick={() => {
                setNewModule(module);
                setEditModuleIndex(index);
              }}
            >
              {" "}
              Edit{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayStateVariable;
