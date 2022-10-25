import React from "react";
import Form from "../../components/form/form.component";

export const AddItem = (props) => {
  return (
    <div>
      <Form addItem={props.addNewItem} />
    </div>
  );
};
export default AddItem;
