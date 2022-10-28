import Form from "../../componants/form/form.componant";
import "./add-item.css";
const AddItem = (props) => {
  return (
    <div className="addItem">
      <Form
        theError={props.data}
        addItem={props.addItem}
        setTheError={props.setTheError}
      />
    </div>
  );
};

export default AddItem;
