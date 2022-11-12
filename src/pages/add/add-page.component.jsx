import Form from '../../components/form/form.component'
import './add-page.css'
 

const Add = (props)=>{
    return (
        <div>
            <Form onAddItem={props.addItem} />
        </div>
    )
}

export default Add;
