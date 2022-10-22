import "./list.css";
import { ListItem } from "../listItem/listItem.component";

/**
 * @param {{
 * item: {
 *   id: number,
 *   title: string,
 *   isDone: boolean,
 *   category: string,
 *   urgent: string
 * }
 * }} props
 */

const List = (props) => {
  return (
    <div className="items-list">
      <ul>
        {props.items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            showDialog={props.showDialog}
            onFinish={props.onFinish}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
