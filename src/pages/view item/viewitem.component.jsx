import { useEffect, useState } from 'react';
import List from '../../components/list/list.component';
import './viewitem.css'
const ViewItem = (props) => {
    const [time, settime] = useState(new Date());

    useEffect(() => {
        console.info("welcome to view item page");
        const interval = setInterval(() => {
            console.log("set new time " + time.toString());
            settime(new Date());
        }, 1000)
        return () => {
            console.info("bye bye ");
            console.info("clearninig ")
            clearInterval(interval);
        }
    },
        [])
    return (
        <div className='view'>
            <div className='colck'>{time.toLocaleTimeString()}</div>
            {

                props.items.length > 0
                    ? <List items={props.items} onDelete={props.deleteItem} onFinish={props.finishItem}/>
                    : <h2 className='h'>No Items Added</h2>
            }
        </div>
    );
}
export default ViewItem