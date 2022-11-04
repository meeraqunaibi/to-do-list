import './add-item.css';
import Form from '../../components/form/form.component';

const AddItemPage = (props) => {
    return (
        <div>

            <h1> Add Item Page</h1>
            <Form onAddItem={props.addItem} />
        </div>
    );

};
export default AddItemPage;