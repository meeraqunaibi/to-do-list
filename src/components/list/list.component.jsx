import Item from "./item.component"
import './list.css'
const List =(props) =>{
return(
  <div className="item-list">
    {
      props.items.map(item=>(
        <Item 
        key = {item.id}
        item ={item}
        onDelete={props.onDelete}
        onFinish={props.onFinish}

        />
      )
        )
    }
  </div>
)
}
export default List;