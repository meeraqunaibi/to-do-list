import './list.css';
const List = (props) => {
    console.log(props.items);
    /** @param{{
      items:{
                title:event.target.title.value,
                urgent:event.target.urgent.value,
                category:event.target.category.value,
    
            }[]}}props
            */
    return (
        <div className='list'>
            <ul>
                {
                    props.items.map((item, index) => <li key={index}>
                        {item.title}-{item.category}-{item.urgent ? 'URGENT' : 'non-urgent'}</li>)
                }
            </ul>
        </div>
    )
}
export default List;