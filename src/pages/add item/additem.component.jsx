import Form from '../../components/form/form.component';
import './additem.css'
const AddItem=(props)=>{
    return(
        <div className='add'>
            <h1>ali</h1>
            <Form onAddItem={props.addItem}/>
        </div>
    );
}
export default AddItem