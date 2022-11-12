import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <nav>
        <Link className={location.pathname === "/add" ? 'active' : ""} to="/add">
          Add Item
        </Link>
        <Link
          className={location.pathname.includes("view") ? 'active' : ""}
          to="/view"
        >
          view Item
        </Link>
      </nav>
    </div>
  );
};

export default Header;
