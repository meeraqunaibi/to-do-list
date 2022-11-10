import './add-item.css';
import Form from '../../form/form.component'
const AddItemsPage = (props)=>{
    return(
        <div>
            <h1>add-items pages </h1>
            <Form onAddItem={props.addItem} />
            
        </div>
    );
};


export default AddItemsPage;