import Form from "../../form/form.component";
const AddItemPage = (props) => {
  return (
    <div>
      <Form onAddItem={props.onAdd} />
    </div>
  );
};
export default AddItemPage;
