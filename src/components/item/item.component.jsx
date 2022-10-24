import deleteIcon from "../../assets/deleteIcon.svg"; 
import checkMark from "../../assets/checkMark.svg";

export default function Item({ item, onDelete, onCheck }) {
  return (
    <li className={item.urgent?'urgent':''}>
        <div className="data">
            <h3 className={item.isDone? "done":""}>{item.title}</h3>
            <span className={item.isDone? "done":""}>{item.category}</span>
        </div>
        <div className="actions">
            <button onClick={()=> {
                onDelete(item.id); 
            }}>
                <img src={deleteIcon} alt="delete" width={30}/>
            </button>
            <button disabled={item.isDone} onClick={() => onCheck(item.id)}>
                <img src={checkMark} alt="check" width={30} />
            </button>
        </div>
    </li>
  )
}
