import './view.css';
import List from '../../components/list/list.component';
import React, { useEffect, useState } from 'react';
const ViewItemPage = (props) => {
  console.log(props);
  const [time, setTime] = useState(new Date());

  const updateTime = () => {
    // console.log("setting new time",time.toString());
    setTime(new Date());
  }

  useEffect(() => {
    console.info("welcome to view item page");
    const interval = setInterval(updateTime, 1000);
    return () => {
      console.info("bye bye from  view item page");
      console.info("interval clear");
      clearInterval(interval);
    }
  }, []);
  return (
    <div className='ViewItemPage'><h1>View Item Page</h1>
      <div className="clock">{time.toLocaleTimeString()}</div>

      {
        // props.items.length > 0
        //     ? <List items={props.items} onDelete={props.deleteItem} onFinish={props.finishItem} />
        //     : props.loading

        //         ? <h1>Loading ...</h1>
        //         : <h2>No Items Added</h2>


        props.loading ? <h1>loading...</h1>
          : props.items.length > 0 ? <List items={props.items} onDelete={props.deleteItem} onFinish={props.finishItem} /> :
            <h2>No Items Added</h2>
      }

    </div>


  );
};
export default ViewItemPage;