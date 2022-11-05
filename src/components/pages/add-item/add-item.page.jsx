import './add-item.css';
import Form from '../../form/form.component';

const AddItemPage = (props) => {

  return (
    <div className="add-item">
      <Form onAddItem={props.addItem} />
    </div>
  )
};

export default AddItemPage;