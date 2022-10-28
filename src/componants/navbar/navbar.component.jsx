import "./navbar.css";
const NavBar = (props) => {
  return (
    <header>
      <h1>To-Do App</h1>
      <div className="btns">
        <button
          onClick={() => {
            props.setCurrentPage("add");
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            props.setCurrentPage("view");
          }}
        >
          View
        </button>
      </div>
    </header>
  );
};
export default NavBar;
