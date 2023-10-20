function KanbasNavigation(active) {
  const links = [
    {
      name: "Account",
      url: "/Kanbas/Account/Profile/index.html",
      icon: 'fa fa-user fa-2x" style="color: lightgrey;"',
    },
    {
      name: "Dashboard",
      url: "/Kanbas/Dashboard/index.html",
      icon: "fa fa-thin fa-dashboard fa-2x",
    },
    {
      name: "Courses",
      url: "/Kanbas/Courses/Home/index.html",
      icon: "fa fa-thin fa-book fa-2x",
    },
    {
      name: "Calendar",
      url: "/Kanbas/Calendar/index.html",
      icon: 'fa fa-thin fa-sharp fa-light fa-2x fa-calendar-days" style="color: red;"',
    },
    {
      name: "Inbox",
      url: "/Kanbas/Inbox/index.html",
      icon: 'fa fa-sharp fa-2x fa-inbox" style="color: #ed020e;"',
    },
    {
      name: "History",
      url: "/Kanbas/History/index.html",
      icon: 'fa fa-thin fa-2x fa-clock" style="color: #ff0000;',
    },
    {
      name: "Studio",
      url: "/Kanbas/Studio/index.html",
      icon: 'fa fa-thin fa-sharp fa-2x fa-tv" style="color: #ff0000;"',
    },
    {
      name: "Commons",
      url: "/Kanbas/Commons/index.html",
      icon: 'fa fa-regular fa-sharp fa-2x fa-arrow-right" style="color: #ff0000;"',
    },
    {
      name: "Help",
      url: "/Kanbas/Help/index.html",
      icon: 'fa-regular fa-2x fa-circle-question" style="color: #ff0000;"',
    },
  ];
  return `
  <link href="index.css" rel="stylesheet" />
  <ul class="wd-kanbas-navigation">
  <li>
      <img class="neu-logo" src="/Kanbas/KanbasNavigation/northeastern-university-logo.png" />
    </li>
  ${links
    .map(
      (link) => `
    <li class="${link.name === active ? "wd-active" : ""}">
    <a href="${link.url}">
    <i class="${link.icon}" aria-hidden="true"></i>
    ${link.name}
    </a>
    </li>`
    )
    .join("")}
    // <li>
    //   <img class="neu-logo" src="northeastern-university-logo.png" />
    // </li>
    // <li>
    //   <a href="/Kanbas/Account/Profile/index.html"><i class="fa fa-user fa-2x" style="color: lightgrey;"></i>Account</a>
    // </li>
    // <li class="wd-active">
    //   <a href="/Kanbas/Dashboard/index.html"><i class="fa fa-thin fa-dashboard fa-2x"></i><p>Dashboard</p></a>
    // </li>
    // <li>
    //   <a href="/Kanbas/Courses/Home/index.html"><i class="fa fa-thin fa-book fa-2x"></i><p>Courses</p></a>
    // </li>
    // <li>
    //   <a href="#"><i class="fa fa-thin fa-sharp fa-light fa-2x fa-calendar-days" style="color: red;"></i><p>Calendar</p></a>
    // </li>
    // <li>
    //   <a href="#"><i class="fa fa-sharp fa-2x fa-inbox" style="color: #ed020e;"></i><p>Inbox</p></a>
    // </li>
    // <li>
    //   <a href="#"><i class="fa fa-thin fa-2x fa-clock" style="color: #ff0000;"></i><p>History</p></a>
    // </li>
    // <li>
    //   <a href="#"><i class="fa fa-thin fa-sharp fa-2x fa-tv" style="color: #ff0000;"></i><p>Studio</p></a>
    // </li>
    // <li>
    //   <a href="#"><i class="fa fa-regular fa-sharp fa-2x fa-arrow-right" style="color: #ff0000;"></i><p>Commons</p></a>
    // </li>
    // <li>
    //   <a href="#"><i class="fa-regular fa-2x fa-circle-question" style="color: #ff0000;"></i><p>Help</p></a>
    // </li>
  </ul>`;
}

export default KanbasNavigation;
