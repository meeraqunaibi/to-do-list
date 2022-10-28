import './alert.css'

const Alert =(props)=>{
    const { item } = props;
    return (
        <div className='alert'>
        <h3>Are you sure to delete this task : {item.title} ? </h3>
        <div className='decision'>
        <button onClick={()=> props.onDelete(item.id)
        }>Yes</button>    
        <button onClick={()=> props.onPopUp(undefined)}>No</button>
        </div>
        </div>
    )
}
export default Alert; 