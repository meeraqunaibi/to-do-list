import "./list.css";
const List = (props) => {
  return (
    <div className="list">
      The list of items
      <ul>
        {
        props.items.map((item , index)=>
        <li key={index}>{item.title} - {item.category} - {item.urgent? 'urgent' : 'Not urgent'} </li>) //negative of index ??

        }
      </ul>
    </div>
  );
};
export default List;