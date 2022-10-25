import Form from "../form/form.component";
import "./add-page.css";
export default function addPage({ onAddItem }) {
  return (
    <div className="add container">
      <Form onAddItem={onAddItem} />
      <hr />
    </div>
  );
}
