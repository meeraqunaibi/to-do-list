import Form from "../../form/form.component";

const FormPage = (props) => {
  return (<Form addItem={props.addItem} />);
};
export default FormPage;
