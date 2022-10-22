import './list.css';
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
            <div className='licenter'>
            <ol className="list">
                {
                    props.items.map((item, index) => <li  key={index} className="list-item one"> <span style={index%2===0?{backgroundColor:"cadetblue"}:{backgroundColor:"rgb(255, 68, 69)"}}>{item.title}-{item.category}-{item.urgent ? ("urgent:Urgent") : "urgent:NotUrgent"}</span></li>)
                }


            </ol>
            </div>



        </div>
    )
}
export default List;
