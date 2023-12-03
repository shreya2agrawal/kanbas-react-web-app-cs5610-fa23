import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-tabs mt-2">
      <Link
        to="https://aquamarine-travesseiro-7b10c8.netlify.app/"
        className={`nav-link ${
          pathname.includes("aquamarine-travesseiro-7b10c8.netlify.app")
            ? "active"
            : ""
        }`}
      >
        A1
      </Link>
      <Link
        to="https://a2--aquamarine-travesseiro-7b10c8.netlify.app/"
        className={`nav-link ${pathname.includes("a2") ? "active" : ""}`}
      >
        A2
      </Link>
      <Link
        to="/Labs/a3"
        className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
      >
        A3
      </Link>
      <Link
        to="/hello"
        className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}
      >
        Hello
      </Link>
      <Link
        to="/Kanbas"
        className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
      >
        Kanbas
      </Link>
      <Link
        to="/Labs/a4"
        className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}
      >
        A4
      </Link>
      <Link
        to="/Labs/a5"
        className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}
      >
        A5
      </Link>
      <Link className="nav-link" to="/Project">
        Project
      </Link>
    </nav>
  );
}
export default Nav;
