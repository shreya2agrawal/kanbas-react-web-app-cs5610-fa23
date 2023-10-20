import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCheckCircle,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import "./ModuleList.css";
import db from "../../Database";

function Modules() {
  const { courseId } = useParams();
  const modules = db.modules;
  const [expandedModules, setExpandedModules] = useState({}); // To track expanded modules

  const toggleModule = (index) => {
    setExpandedModules((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div class="wd-flex-grow-1">
      <div class="row wd-margin-top ">
        <div class="float-end wd-margin-right">
          <div class=" wd-button float-end ">
            <a class="btn btn-light btn-md" href="#" role="button">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </a>
          </div>
          <div class=" float-end ">
            <a class="btn btn-danger btn-sm wd-button" href="#" role="button">
              <i class="fa fa-plus" aria-hidden="true"></i>
              Modules
            </a>
          </div>
          <div class=" wd-button float-end ">
            <div class="dropdown">
              <button
                class="btn btn-light btn-sm dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Publish All
                <i
                  class="fa fa-light fa-circle-check"
                  style={{ color: "#1ac304;" }}
                ></i>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li class="dropdown-item">Publish All</li>
                <li class="dropdown-item">Publish all modules and items</li>
                <li class="dropdown-item">Publish modules only</li>
                <li class="dropdown-item">Unpublish all modules and items</li>
              </ul>
            </div>
          </div>
          <div class=" wd-button float-end ">
            <a class="btn btn-sm btn-light" href="#" role="button">
              View Progress
            </a>
          </div>
          <div class=" wd-button float-end ">
            <a class="btn btn-light btn-sm" href="#" role="button">
              Collapse All
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <ul
          className="list-group wd-border-radius-0"
          style={{ width: "800px" }}
        >
          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <React.Fragment key={index}>
                <li
                  className="list-group-item list-group-item-secondary custom-grey-bg"
                  onClick={() => toggleModule(index)} // Toggle visibility
                >
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="float-start me-1 pt-1"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="float-start me-1 pt-1"
                  ></FontAwesomeIcon>
                  {/* <div className="flex-container"> */}
                  {module.name}
                  <div className="float-end">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "#00a600" }}
                    />
                    &nbsp;&nbsp;&nbsp;
                    {expandedModules[index] ? "-" : "+"}
                    &nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon
                      icon={faEllipsisV}
                      style={{ color: "#787878" }}
                    />
                  </div>
                  {/* </div> */}
                </li>

                {expandedModules[index] &&
                  module.lessons &&
                  module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="list-group-item ms-3">
                      <FontAwesomeIcon
                        icon={faEllipsisV}
                        className="float-start me-1 pt-1"
                      ></FontAwesomeIcon>
                      <FontAwesomeIcon
                        icon={faEllipsisV}
                        className="float-start me-1 pt-1"
                      ></FontAwesomeIcon>
                      {lesson.name}
                      <div className="float-end">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ color: "#00a600" }}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon
                          icon={faEllipsisV}
                          style={{ color: "#787878" }}
                        />
                      </div>
                    </li>
                  ))}
              </React.Fragment>
            ))}
        </ul>
        <div class="col-3 d-none d-xxl-block">
          <div class="me-3 ms-5 mt-3">
            <h5> Course Status</h5>
            <button type="button" class="btn btn-light btn-sm wd-button-1">
              <i class="fa fa-ban pe-2" aria-hidden="true"></i> Unpublish
            </button>
            <button type="button" class="btn btn-success btn-sm wd-button-2">
              <i
                class="fa fa-check-circle pe-2"
                style={{ color: "white" }}
                aria-hidden="true"
              ></i>
              Published
            </button>

            <div class="row mt-3 ms-1">
              <ul class="list-group wd-underline-no">
                <li class="list-group-item mb-1 ">
                  <a href="#" style={{ color: "black;" }}>
                    {" "}
                    <i class="fa fa-upload pe-2" aria-hidden="true"></i> Import
                    Existing Content
                  </a>
                </li>
                <li class="list-group-item mb-1">
                  <a href="#" style={{ color: "black;" }}>
                    <i
                      class="fa fa-arrow-circle-right pe-2"
                      aria-hidden="true"
                    ></i>
                    Import From Commons
                  </a>
                </li>
                <li class="list-group-item mb-1">
                  <a href="#" style={{ color: "black;" }}>
                    <i class="fa fa-spinner pe-2" aria-hidden="true"></i>Choose
                    Home Page
                  </a>
                </li>
                <li class="list-group-item mb-1">
                  <a href="#" style={{ color: "black;" }}>
                    <i class="fa fa-bar-chart pe-2" aria-hidden="true"></i>View
                    Course Stream
                  </a>
                </li>
                <li class="list-group-item mb-1">
                  <a href="#" style={{ color: "black;" }}>
                    <i class="fa fa-bullhorn pe-2" aria-hidden="true"></i>New
                    Annoucement
                  </a>{" "}
                </li>
                <li class="list-group-item mb-1">
                  <a href="#" style={{ color: "black;" }}>
                    <i class="fa fa-bar-chart pe-2" aria-hidden="true"></i>New
                    Analytics
                  </a>
                </li>
                <li class="list-group-item mb-1">
                  <a href="#" style={{ color: "black;" }}>
                    <i class="fa fa-bell pe-2" aria-hidden="true"></i>View
                    Course Notification
                  </a>{" "}
                </li>
              </ul>
            </div>
            {/* <div class="row"> */}
            <h5 class="float-start ms-1 mt-4"> To Do</h5>
            <ul
              class="list-group float-start"
              style={{ marginLeft: "15", width: "95%" }}
            >
              <li class="list-group-item d-flex justify-content-between align-items-start wd-border-1" />
              <div class="ms-2me-auto">
                <div class="fw-bold ">
                  <a
                    href="#"
                    class="wd-fg-color-red "
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      class="fa fa-info-circle wd-fg-color-red pe-2"
                      aria-hidden="true"
                    ></i>{" "}
                    A1 - ENV + HTML
                  </a>
                </div>
                <div class="wd-fg-color-gray">
                  {" "}
                  100 points - Sept 18 at 11:59pm
                </div>
              </div>
              <i class="fa fa-times wd-fg-color-gray" aria-hidden="true"></i>
            </ul>
            {/* </div>
            <div class="row mt-4"> */}
            <div class="inline">
              <h5 class="float-start ms-1 "> <br/>Comming Up </h5>
              <a
                href="#"
                class="wd-fg-color-red "
                style={{ textDecoration: "none", color: "red" }}
              >
                <h6 class="float-end mt-1">View Calendar</h6>
                <i
                  class="fa fa-calendar float-end pe-2 mt-1 wd-fg-color-red"
                  aria-hidden="true"
                ></i>
              </a>
            </div>

            <ul class="list-group" style={{ marginLeft: "15", width: "95%" }}>
              <li class="list-group-item d-flex justify-content-between align-items-start wd-border-1">
                <div class="ms-2me-auto">
                  <div class="fw-bold ">
                    <a
                      href="#"
                      class="wd-fg-color-red "
                      style={{ textDecoration: "none" }}
                    >
                      <i
                        class="fa fa-calendar wd-fg-color-red pe-2"
                        aria-hidden="true"
                      ></i>{" "}
                      Lecture{" "}
                    </a>
                  </div>
                  <div class="wd-fg-color-gray ps-4">
                    Lecture CS4550.12631.202410 <br /> Sept 7 at 11:45am
                  </div>
                </div>{" "}
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start wd-border-1">
                <div class="ms-2me-auto">
                  <div class="fw-bold ">
                    <a
                      href="#"
                      class="wd-fg-color-red "
                      style={{ textDecoration: "none" }}
                    >
                      <i
                        class="fa fa-calendar wd-fg-color-red pe-2"
                        aria-hidden="true"
                      ></i>{" "}
                      CS 5610 SP23 Lecture
                    </a>
                  </div>
                  <div class="wd-fg-color-gray  ps-4">
                    {" "}
                    CS4550.12631.202410 <br />
                    Sept 11 at 11:45am
                  </div>
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start wd-border-1">
                <div class="ms-2me-auto">
                  <div class="fw-bold ">
                    <a
                      href="#"
                      class="wd-fg-color-red "
                      style={{ textDecoration: "none" }}
                    >
                      <i
                        class="fa fa-calendar wd-fg-color-red pe-2"
                        aria-hidden="true"
                      ></i>{" "}
                      CS 5610 Web Development
                    </a>
                  </div>
                  <div class="wd-fg-color-gray  ps-4">
                    {" "}
                    CS4550.12631.202410 <br />
                    Sept 12 at 11:45am
                  </div>
                </div>{" "}
              </li>
            </ul>
            <div class="mt-2">
              <a
                href="#"
                class="wd-fg-color-red wd-font-size-sm"
                style={{ textDecoration: "none", color: "red" }}
              >
                {" "}
                12 more in the next week...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modules;
