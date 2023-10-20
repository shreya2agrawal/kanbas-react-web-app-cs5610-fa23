import KanbasNaviagtion from "../../KanbasNavigation/KanbasNavigation.js";
import CourseNavigation from "../CourseNavigation/CourseNavigation.js";

function Home() {
  return `    
  <div class="wd-flex-row-container">
      <div class="wd-bg-color-black wd-margin-0 d-none d-xl-block">
        ${KanbasNaviagtion("Courses")}
      </div>

      <div class="wd-flex-grow-1">
        <div style="width: 100% d-none d-xl-block">
          <div class="wd-courses-home-header wd-flex-row-container">
            <i
              class="fa-solid fa-bars fa-2x"
              style="color: #ff0000; float: left; padding: 15px"
            ></i>
            &nbsp;
            <nav
              style="--bs-breadcrumb-divider: '>'; padding: 0"
              aria-label="breadcrumb"
            >
              <ol class="breadcrumb" style="float: right; padding-top: 15px">
                <li class="breadcrumb-item">
                  <a href="../../Dashboard/index.html">CS4550.12631.202410</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Home</li>
              </ol>
            </nav>
          </div>
          <hr style="width: 100%; margin-top: 0" />
          <div class="wd-flex-grow-1 d-block d-xl-none wd-inline">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
              <div class="container-fluid">
                <div class="float-start">
                  <a href="/Kanbas/Courses/Home/KanbasNavSideBar.html"
                    ><i
                      class="fa fa-bars wd-fg-color-green ps-3 wd-hover"
                      aria-hidden="true"
                    ></i
                  ></a>
                </div>
                <div class="wd-text-center wd-fg-color-white pb-2 pt-2">
                  202410.SEC-01 Fall 23 <br />Home
                </div>
                <a href="\Kanbas\Courses\Home\CourseNavSideBar.html">
                  <i
                    class="wd-text-right float-end fa fa-chevron-down pe-3 mb-1 pt-0 wd-fg-color-white"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </nav>
          </div>
          <div style= "clear: both;"> </div>
            <div class="wd-flex-row-container wd-margin-right ">
            <div class="col-2 d-none d-xl-block" >
                <!-- Course Navigation  -->
                <div class="wd-margin-left mb-3 wd-font-size-sm wd-fg-color-gray">
                    202410.SEC-01 Fall 23
                </div>
                ${CourseNavigation()}
            </div>
            <div class="wd-flex-grow-1">
              <!--Modules-->
                <div class="row wd-margin-top ">
                  <div class="float-end wd-margin-right">
                    <BR>
                      <div class=" wd-button float-end ">
                          <a class="btn btn-light btn-md" href="#" role="button">
                              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                          </a>
                      </div>
                      <div class=" float-end ">
                          <a class="btn btn-danger btn-sm wd-button" href="#" role="button">
                              <i class="fa fa-plus" aria-hidden="true"></i>
                              Modules</a>
                      </div>
                      <div class=" wd-button float-end ">
                                <div class="dropdown">
                                  <button class="btn btn-light btn-sm dropdown-toggle" 
                                  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                                  Publish All
                                  <i class="fa fa-light fa-circle-check" style="color: #1ac304;"></i>
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
                <div class="row">
                  <BR>
                  <ul class="list-group wd-margin-left wd-margin-right pe-4 wd-border-radius-0">
                      <li class="list-group-item list-group-item-secondary wd-list-week-header">
                          <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                          <i class="fa fa-ellipsis-v float-start me-2 pt-1" aria-hidden="true"></i>
                          Week 0 - INTRO
                          <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                          <i class="fa fa-plus float-end pt-1" style="color:gray;" aria-hidden="true"></i> 
                      </li>
                      <ul class="list-group wd-border-radius-0">
                          <li class="list-group-item wd-border-left wd-list-subheader">
                              <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                              <i class="fa fa-ellipsis-v float-start me-2 pt-1" aria-hidden="true"></i>
                              LEARNING OBJECTIVES
                              <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                              <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i> 
                          </li>
                              <ul class="list-group wd-border-radius-0 wd-list-subheader">
                                  <li class="list-group-item wd-border-left">
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Introduction to the course
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i> </li>
                                  <li class="list-group-item wd-border-left"> 
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Learn what is web development
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li>
                                  <li class="list-group-item wd-border-left">
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Creating a development environment
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li>
                                  <li class="list-group-item wd-border-left "> 
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                     Creating a Web Application
                                     <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                     <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li>
                                  <li class="list-group-item wd-border-left">
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Getting started with the 1st Assignment
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li>
                              </ul>
                          <li class="list-group-item wd-border-left wd-list-subheader">
                              <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                              <i class="fa fa-ellipsis-v float-start me-2 pt-1" aria-hidden="true"></i>
                              READING
                              <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                              <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i> 
                          </li>
                              <ul class="list-group wd-border-radius-0 wd-list-subheader">
                                  <li class="list-group-item wd-border-left">
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Full Stack Developer - Chapter 1- Introduction
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li></li>
                                  <li class="list-group-item wd-border-left">
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li> </li>
                              </ul>
                          <li class="list-group-item wd-border-left wd-list-subheader">
                              <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                              <i class="fa fa-ellipsis-v float-start me-2 pt-1" aria-hidden="true"></i>
                              SLIDES
                              <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li>
              
                          </li>
                          <ul class="list-group wd-border-radius-0">
                              <li class="list-group-item wd-border-left ">
                                  <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                  <i class="fa fa-ellipsis-v float-start me-3  pt-1" ></i>
                                  <i class="fa fa-link pt-1 me-2" style = "color: green" aria-hidden="true"></i>
                                  <a  href="#"> Introduction to web development links to an external site
                                  </a><i class="fa fa-window-restore ms-2" style="color: red;" aria-hidden="true"></i>
                                  <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                  <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i>
                              </li>
                              <li class="list-group-item wd-border-left">
                                  <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-3  pt-1" ></i>
                                      <i class="fa fa-link pt-1 me-2" style = "color: green" aria-hidden="true"></i>
                                      <a href="#"> Creating an HTTP server with Node.js links to an external site</a>
                                      <i class="fa fa-window-restore ms-2" style="color: red;" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li>
                              <li class="list-group-item wd-border-left">
                                  <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                  <i class="fa fa-ellipsis-v float-start me-3  pt-1" ></i>
                                  <i class="fa fa-link pt-1 me-2" style = "color: green" aria-hidden="true"></i>
                                  <a href="#">Creating a React Application Links to an external site</a>
                                  <i class="fa fa-window-restore ms-2" style="color: red;" aria-hidden="true"></i>
                                  <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                  <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></i></li>
                            </ul>
                        
                      </ul>
              
                      <li class="list-group-item list-group-item-secondary mt-4 wd-list-week-header">
                          <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                          <i class="fa fa-ellipsis-v float-start me-2 pt-1" aria-hidden="true"></i>
                          Week 1 - HTML
                          <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                          <i class="fa fa-plus float-end pt-1" style="color:gray;" aria-hidden="true"></i> 
                      </li>
              
                      <ul class="list-group wd-border-radius-0 wd-list-subheader">
                          <li class="list-group-item wd-border-left">
                              <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                              <i class="fa fa-ellipsis-v float-start me-2 pt-1" aria-hidden="true"></i>
                              LEARNING OBJECTIVES
                              <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                              <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i> 
                          </li>
                              <ul class="list-group wd-border-radius-0">
                                  <li class="list-group-item wd-border-left">
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Learn how to create user interfaces with HTML
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i> </li>
                                  <li class="list-group-item wd-border-left"> 
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Keep working on Assignment 1
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li>
                                  <li class="list-group-item wd-border-left">
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Deploy the assignment to Netlify
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li>
                                  
                              </ul>
                          <li class="list-group-item wd-border-left">
                              <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                              <i class="fa fa-ellipsis-v float-start me-2 pt-1" aria-hidden="true"></i>
                              READING
                              <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                              <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i> 
                          </li>
                              <ul class="list-group wd-border-radius-0">
                                  <li class="list-group-item wd-border-left">
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Full Stack Developer - Chapter 1- Introduction
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li></li>
                                  <li class="list-group-item wd-border-left">
                                      <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-ellipsis-v float-start me-5  pt-1" aria-hidden="true"></i>
                                      Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML
                                      <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li> </li>
                              </ul>
                          <li class="list-group-item wd-border-left">
                              <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                              <i class="fa fa-ellipsis-v float-start me-2 pt-1" aria-hidden="true"></i>
                              SLIDES
                              <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                      <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li>
              
                          </li>
                          
                        
                      </ul>
                      <ul class="list-group wd-border-radius-0">
                        <li class="list-group-item wd-border-left">
                            <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v float-start me-3  pt-1" ></i>
                            <i class="fa fa-link pt-1 me-2" style = "color: green" aria-hidden="true"></i>
                            <a href="#"> Web Development Basics
                            </a><i class="fa fa-window-restore ms-2" style="color: red;" aria-hidden="true"></i>
                            <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                            <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i>
                        </li>
                        <li class="list-group-item wd-border-left mb-3">
                            <i class="fa fa-ellipsis-v float-start me-1 pt-1" aria-hidden="true"></i>
                                <i class="fa fa-ellipsis-v float-start me-3  pt-1" ></i>
                                <i class="fa fa-link pt-1 me-2" style = "color: green" aria-hidden="true"></i>
                                <a href="#"> HTTP server </a>
                                <i class="fa fa-window-restore ms-2" style="color: red;" aria-hidden="true"></i>
                                <i class="fa fa-ellipsis-v float-end ps-3 pt-1" aria-hidden="true"></i>
                                <i class="fa fa-check-circle float-end pt-1" style="color: green;" aria-hidden="true"></i></li>
        
                      </ul>
                  </ul>
              
              </div>

          </div>
          <div class="col-3 d-none d-xxl-block ">
            <div class="me-3 ms-5 mt-3">
                <div class="row">
                    <h5 class="float-start"> Course Status</h5>
                </div>
                <div class="row">
                    <div class="col">
                        
                    <button type="button" class="btn btn-light btn-sm wd-button-1">
                        <i class="fa fa-ban pe-2" aria-hidden="true"></i> Unpublish</button>
                    <button type="button" class="btn btn-success btn-sm wd-button-2">
                        <i class="fa fa-check-circle pe-2" style="color: white;" aria-hidden="true"></i>Published</button>
                        
                    </div>
                    
                </div>
                
                <div class="row mt-3 ms-1">
                    <ul class="list-group wd-underline-no">
                        <li class="list-group-item mb-1 "><a href="#"  style="color: black;"> <i class="fa fa-upload pe-2" aria-hidden="true"></i> Import Existing Content</a></li>
                        <li class="list-group-item mb-1"><a href="#"  style="color: black;"><i class="fa fa-arrow-circle-right pe-2" aria-hidden="true"></i>Import From Commons</a></li>
                        <li class="list-group-item mb-1"><a href="#" style="color: black;"><i class="fa fa-spinner pe-2" aria-hidden="true"></i>Choose Home Page</a></li>
                        <li class="list-group-item mb-1"><a href="#"  style="color: black;"><i class="fa fa-bar-chart pe-2" aria-hidden="true"></i>View Course Stream</li>
                        <li class="list-group-item mb-1"><a href="#"  style="color: black;"><i class="fa fa-bullhorn pe-2" aria-hidden="true"></i>New Annoucement</a> </li>
                        <li class="list-group-item mb-1"><a href="#"  style="color: black;"><i class="fa fa-bar-chart pe-2" aria-hidden="true"></i>New Analytics</li>
                        <li class="list-group-item mb-1"><a href="#" style="color: black"><i class="fa fa-bell pe-2" aria-hidden="true"></i>View Course Notification</a> </li>
                      </ul>
                </div>
                <div class="row">
                    <h5 class="float-start ms-1 mt-4"> To Do</h5>
                    <ul class="list-group float-start" style="margin-left: 15; width: 95%;">
                        <li class="list-group-item d-flex justify-content-between align-items-start wd-border-1">
                          <div class="ms-2me-auto">
                            <div class="fw-bold "><a href="#" class="wd-fg-color-red " style="text-decoration: none">
                                <i class="fa fa-info-circle wd-fg-color-red pe-2" aria-hidden="true"></i>  A1 - ENV + HTML</a></div>
                           <div class="wd-fg-color-gray"> 100 points - Sept 18 at 11:59pm</div> 
                          </div>
                          <i class="fa fa-times wd-fg-color-gray" aria-hidden="true"></i>
                      </ul>
                
                </div>
                <div class="row mt-4">
                <div class="inline"> 
                    <h5 class="float-start ms-1 "> Comming Up </h5>
                    <h6 class="float-end mt-1"><a href="#" class="wd-fg-color-red " style="text-decoration: none; color: red;">View Calendar</h6>
                    <i class="fa fa-calendar float-end pe-2 mt-1 wd-fg-color-red" aria-hidden="true"></i></a>
                </div>
                <!-- <hr class="ms-2 me-2"> -->
                
                <ul class="list-group" style="margin-left: 15; width: 95%;">
                    <li class="list-group-item d-flex justify-content-between align-items-start wd-border-1">
                        <div class="ms-2me-auto">
                          <div class="fw-bold "><a href="#" class="wd-fg-color-red " style="text-decoration: none">
                              <i class="fa fa-calendar wd-fg-color-red pe-2" aria-hidden="true"></i>  Lecture </a></div>
                         <div class="wd-fg-color-gray ps-4">Lecture CS4550.12631.202410 <br> Sept 7 at 11:45am</div> 
                        </div> </li>
                    <li class="list-group-item d-flex justify-content-between align-items-start wd-border-1">
                            <div class="ms-2me-auto">
                              <div class="fw-bold "><a href="#" class="wd-fg-color-red " style="text-decoration: none">
                                  <i class="fa fa-calendar wd-fg-color-red pe-2" aria-hidden="true"></i> CS 5610 SP23 Lecture</a></div>
                             <div class="wd-fg-color-gray  ps-4"> CS4550.12631.202410 <br>Sept 11 at 11:45am</div> 
                    </div></li>
                    <li class="list-group-item d-flex justify-content-between align-items-start wd-border-1">
                                <div class="ms-2me-auto">
                                  <div class="fw-bold "><a href="#" class="wd-fg-color-red " style="text-decoration: none">
                                      <i class="fa fa-calendar wd-fg-color-red pe-2" aria-hidden="true"></i>  CS 5610 Web Development</a></div>
                                 <div class="wd-fg-color-gray  ps-4"> CS4550.12631.202410 <br>Sept 12 at 11:45am</div> 
                    </div> </li>
                 
                  </ul>
                
                </div>
                <div class="mt-2"> <a href="#" class="wd-fg-color-red wd-font-size-sm" style="text-decoration: none; color: red;"> 12 more in the next week...</a></div>
                </div>
        </div>
             </div>
      </div>
    </div>
  `;
}

export default Home;
