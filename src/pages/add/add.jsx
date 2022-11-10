import "./add.css";
import Form from "../../components/form/form.component";

const AddPage = (props) => {
  return (
    <div>
      <Form onAddItem={props.addItem} />
    </div>
  );
};

export default AddPage;
