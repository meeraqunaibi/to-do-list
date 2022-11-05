import Form from '../../components/form/form.component'
import './add.css';

const AddItem = (props) => {
    return (
        <div className='Lists'>
            <div className="color-header">
                <h1 className="header">Add New Task</h1>
            </div>
            <Form onAddItem={props.addItem} />

        </div>


    )
}
export default AddItem;