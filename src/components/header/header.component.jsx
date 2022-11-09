import "./header.css";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <div className="container">
        <h1>R-ToDOApp</h1>
        <div className="buttons">
          <Link
            to="/add"
            className={location.pathname.includes("add") ? "active" : ""}
          >
            Add
          </Link>
          <Link
            to="/view"
            className={location.pathname.includes("view") ? "active" : ""}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
