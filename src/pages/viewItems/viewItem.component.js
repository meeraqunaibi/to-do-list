import React from "react";
import List from "../../components/list/list.component";
import Modal from "../../components/modal/modal.component";


export const ViewItems = (props) => {
  return (
    <div>
      <List onFinish={props.onFinish} items={props.items} showDialog={props.showDialog} />
      {props.isShown ? (
        <Modal id={props.id} deleteTask={props.deleteTask} undoDelete={props.undoDelete} />
      ) : (
        ""
      )}
    </div>
  );
};
export default ViewItems;
