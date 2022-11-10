import './view-item.css'
import List from '../../list/list.component'
// import { useEffect } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const ViewItemsPage = (props) => {
    const [time, setTime] = useState(new Date());
    const updateTime = () => {
        console.log("setting New Time" + time.toString());
        setTime(new Date());
    }

    //mount
     useEffect(() => {
        // alert("Welcome to View Item Page");
        const interval = setInterval(updateTime, 1000)
        //nonMount
        return () => {
            console.info("By By View Item Pages");
            console.info("Clear data");
            clearInterval(interval);
        }
    },)


    console.log(props)

    return (
        <div>

            <h1>view-items pages </h1>
            <div>
                {(time).toLocaleTimeString()}

            </div>
            {

                props.loding ? "is Loding ..." :
                    props.item
                        ? <List item={props.item} deleteHandel={props.deleteHandel}  finishHandel={props.onFinish} />
                        : <h1>No items Add!</h1>
            }

        </div>
    );
};


export default ViewItemsPage;