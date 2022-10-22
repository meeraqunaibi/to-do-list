import './list.css';
import Category_option from '../form/data';
/**
 * @param {{
 * items:{
 * title: event.target.title.value,
 * category : event.target.category.value,
 * urgent: event.target.urgent.checked,
 *}[]
 * }} props 
 */
function List(props) {
    return (
        <div className='items_list'>
            <h1>The Items List</h1>
            {/* <ul>
            {
                props.items.map(item=><li>{item.title}-{item.category}-{item.urgent===true?("urgent:Urgent"):"urgent:NotUrgent"}</li>)
            }
          </ul> */}
            
            <ol className="list">
                a
            
                {
                    
                    props.items.map((item, index) => <li  key={index} className="list-item one"> 
                    <span style={index%2===0?{backgroundColor:"cadetblue"}:{backgroundColor:"rgb(255, 68, 69)"}}>

                        {item.title}-
                        
                        {/* {item.category} */}
                        {
                            Category_option.filter(cat=>cat.value===item.category)[0]?.label
                        }
                        
                        
                        -{item.urgent ? ("urgent:Urgent") : "urgent:NotUrgent"}{"   "}<button onClick={()=>props.onDelete(item.id)}>x</button></span>
                        
                        
                        </li>)
                }
        


            </ol>
            



        </div>
    )
}
export default List;
