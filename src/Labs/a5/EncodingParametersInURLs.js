import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  // const [welcome, setWelcome] = useState("");
  // const fetchWelcome = async () => {
  //   const response = await axios.get("http://localhost:4000/a5/welcome");
  //   setWelcome(response.data);
  // };
  // useEffect(() => {
  //   fetchWelcome();
  // }, []);
  const URL_local = "http://localhost:4000";
  // const API_BASE = process.env.REACT_APP_API_BASE;
  // const URL_global = "https://kanbas-node-server-app-tth1.onrender.com";
  // const URL_global = `${API_BASE}`;
  const URL_global = process.env.REACT_APP_LAB_BASE;

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      {/* <h3>Integrating React with APIs</h3>
      <h3>Fetching Welcome</h3>
      <h3>{welcome}</h3> */}
      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control"
        type="number"
        value={a}
      />
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control"
        type="number"
        value={b}
      />
      <h3>Query Parameters</h3>
      <a
        href={`${URL_global}/a5/calculator?a=${a}&b=${b}&operation=add`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`${URL_global}/a5/calculator?a=${a}&b=${b}&operation=subtract`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </a>
      <h3>Path Parameters</h3>
      <a
        href={`${URL_global}/a5/add/${a}/${b}`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`${URL_global}/a5/subtract/${a}/${b}`}
        className="btn btn-danger"
      >
        Substract {a} - {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;
