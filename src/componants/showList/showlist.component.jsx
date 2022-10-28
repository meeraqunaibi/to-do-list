import "./shlowlist.css";
import Item from "./item.component";
const ShowList = (props) => {
  return (
    <div className="showList">
      {props.data.map((e) => {
        return (
          <Item
            e={e}
            key={e.id}
            delete={props.delete}
            markDone={props.markDone}
          />
        );
      })}
    </div>
  );
};
export default ShowList;
