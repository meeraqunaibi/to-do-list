import List from "../../list/list.component";
const ViewItemPage = (props)=>{
    return (
    <div>
        {props.items.length ?
        <List items={props.items} onDelete={props.onDelete} onfinish={props.onFinish}/>
        : <div>No Items Added</div>
}
        </div>
    )
}
export default ViewItemPage ;