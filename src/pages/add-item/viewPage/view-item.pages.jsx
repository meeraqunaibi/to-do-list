import "./view-item.css";
import List from "../../../components/list/list.component";
import { useEffect, useState } from "react";
const ViewItemPage = (props) => {
  // useEffect(()=>{
  // console.info("welcome to my to da app");

  // return ()=>{
  // console.info("Bye Bye welcome later");}
  // },[]);
  const [time, setTime] = useState(new Date());
  const update = () => {
    console.log("time setting now", time.toString());
    setTime(new Date());
  };
  useEffect(() => {
    console.info("welcome to my to da app");
    const interval = setInterval(update, 1000);
    return () => {
      console.info("Bye Bye welcome later");
      console.info("clearing time");
      clearInterval(interval);
    };
  }, []);

  console.log("value of props", props);
  return (
    <div className="viewPage">
      
      <div className="clock"><h1 className="title-view">view Item page</h1>{time.toLocaleTimeString()}</div>

      {
        props.loading ? (
          <h2>loading:{props.loading}</h2>
        ) : props.items.length > 0 ? (
          <List
            items={props.items}
           onDelete={props.deleteItem}
            onFinish={props.finishItem}
          />
        ) : (
          <h2>No Item added</h2>
        )

        // props.items.length>0 ? <List items={props.items}
        // OndelItem={props.items}  fifnishItem={props.items}/>
        //        : <h2>loading:{props. loading}</h2>

        // :<h2>No Item added</h2>
      }
    </div>
  );
};
export default ViewItemPage;
