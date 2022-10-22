import './list.css'
const List =(props)=>{
    return(
        <div className='list'>
items of list
<ul>
    {
        props.items.map((item,index) =>
            <li key={index}>
                {item.title} - {item.category} - {item.urgent ? 'urgent' :'nonurgent'}
                </li>)
    }
</ul>
        </div>
    );
}
export default List