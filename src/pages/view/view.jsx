import Header from "../../components/header/header.component";
import List from "../../components/list/list.component";

const ViewPage = (props) => {
  return (
    <div >
      {props.items.length>0 ?
      <List items={props.items} onDelete={props.onDelete} onFinish={props.onFinish}/>
    :<h3>Congratulations, you don't have a Task to do</h3> }
    </div>
  );



};

export default ViewPage;
