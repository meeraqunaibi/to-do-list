import Form from '../../components/Forms/form.components';
import './AddItem.css'
const AddItem = (props) => {
    return (
        <div className='add'>
            <Form onAddItem={props.addItem} />
        </div>
    );
}
export default AddItem
