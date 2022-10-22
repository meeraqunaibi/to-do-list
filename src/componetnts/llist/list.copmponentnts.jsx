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

            <ol class="list">
                {
                    props.items.map((item, index) => <li key={index} class="list-item one"> <span>{item.title}-{item.category}-{item.urgent ? ("urgent:Urgent") : "urgent:NotUrgent"}</span></li>)
                }


            </ol>



        </div>
    )
}
export default List;