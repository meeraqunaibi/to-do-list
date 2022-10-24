import Catergories from "../../data/data";
import "./list.css";

/**
 * @param {{
 * items: {
 *   id:int,
 *   title: string,
 *   category:string,
 *   urgent:string
 * }[]
 * }} props
 */
const List = (props) => {
  return (
    <div className="items-list"> 
      <ul >
        {props.items.map((item, index) => (
          <li key={item.id} className={`rowlist row ${item.urgent?'urgent':''}`}>
            <div className="data">
            <h2>
              {/* {index + 1}
              {" - "} */}
              {item.title ? item.title : "no tiltle"}{" "}
            </h2>
            <span>{Catergories.filter(cat=>cat.value ===item.category)[0]?.label}</span> {" "}
            </div>
            {/* {item.urgent ? "URGENT" : "non urgent"}/ */}
            <button  onClick={()=>props.ondelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
