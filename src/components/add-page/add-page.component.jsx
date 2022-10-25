import Form from '../form/form.component';
import "./add-page.css";
export default function addPage({onAddItem}) {
  return (
    <div>
       <Form onAddItem={onAddItem} />
      <hr/>
    </div>
  )
}
