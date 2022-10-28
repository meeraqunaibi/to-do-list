import './add-item.css'
import Form from '../../components/form/form.component';

const AddItemPage = (props) => {
    return (
        <div>
            <Form onAddItem={props.addItem}/>
        </div>
    )

}
export default AddItemPage;
