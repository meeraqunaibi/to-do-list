import ShowList from "../../componants/showList/showlist.component";
import "./view-items.css";
const ViewItems = (props) => {
  console.log(props.data);
  return (
    <div className="ViewItems" style={{ width: "100%" }}>
      {props.data.length ? (
        <ShowList
          data={props.data}
          delete={props.delete}
          markDone={props.markDone}
        />
      ) : (
        <h2>There is no tasks</h2>
      )}
    </div>
  );
};

export default ViewItems;
