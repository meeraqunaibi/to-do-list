import "./header.css";
export default function Header({handleAddClick, handleViewClick, currentPage}) {
  return (
    <div className="header">
        <h1>R-ToDOApp</h1>
        <div className="buttons">
            <button className={currentPage==="add"?"active":""} onClick={handleAddClick}>Add</button>
            <button className={currentPage==="view"?"active":""} onClick={handleViewClick}>View</button>
        </div>
    </div>
  )
}
