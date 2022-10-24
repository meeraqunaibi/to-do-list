import List from "../../list/list.component";

const LIstViewPage = (props) => {
  return (
    <div>
      {props.items.length > 0 ? 
        <List items={props.items} ondelete={props.ondelete} />
       : 
        <div>there is no items added !</div>
      }
    </div>
  );
};
export default LIstViewPage;
