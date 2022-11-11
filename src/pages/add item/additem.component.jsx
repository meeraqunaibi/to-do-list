import Form from '../../components/form/form.component';
import './additem.css'
const AddItem = (props) => {
    return (
        <div className='add'>
            <Form onAddItem={props.addItem} />
        </div>
    );
}
export default AddItem