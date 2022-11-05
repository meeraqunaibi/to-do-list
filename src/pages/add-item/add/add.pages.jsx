import './add.css'
 import Form from  '../../../components/form/form.component'
  const AddItemPage=(props)=>{
    return(
<div>
    <h1 className='title'>Items have been added</h1>
    <Form  onAddItem={props.addItem}/>
</div>
    )
  }
  export default AddItemPage;