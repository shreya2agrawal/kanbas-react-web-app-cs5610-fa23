import EncodingParametersInURLs from "./EncodingParametersInURLs";
import IntegratingReactWithAPIs from "./IntegratingReactWithAPIs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  const API_BASE = process.env.REACT_APP_LAB_BASE;
  return (
    <div className="container">
      <h1>Assignment 5</h1>
      <br />
      <br />
      <div className="list-group">
        {/* <a href="http://localhost:4000/a5/welcome" className="list-group-item"> */}
        <a href={API_BASE} className="list-group-item">
          Welcome
        </a>
      </div>
      <br />
      <br />
      <EncodingParametersInURLs />
      <br />
      <br />
      <hr />
      <WorkingWithObjects />
      <br />
      <br />
      <hr />
      <WorkingWithArrays />
      <br />
      <br />
      <hr />
      <IntegratingReactWithAPIs />
      <br />
      <br />
    </div>
  );
}
export default Assignment5;
