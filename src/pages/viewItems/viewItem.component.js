import React from "react";
import List from "../../components/list/list.component";
import Modal from "../../components/modal/modal.component";
import { useEffect, useState } from "react";

export const ViewItems = (props) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("you are in view item page");
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      console.log("bye bye from view item page");
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h3>{time.toISOString().toString()}</h3>
      <List
        onFinish={props.onFinish}
        items={props.items}
        showDialog={props.showDialog}
      />
      {props.isShown ? (
        <Modal
          id={props.id}
          deleteTask={props.deleteTask}
          undoDelete={props.undoDelete}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default ViewItems;
