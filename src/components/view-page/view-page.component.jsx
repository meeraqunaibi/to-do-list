import List from "../list/list.component";

export default function ViewPage({items,onDelete,onCheck}) {
  return (
    <div>
        { items.length === 0? 
        <h3>No items found</h3>:
        <List items={items} onDelete={onDelete} onCheck={onCheck}/>
        }
      
    </div>
  )
}
