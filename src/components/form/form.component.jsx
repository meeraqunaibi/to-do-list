import { useState } from 'react';
import './form.css'
import CATEGORES_OPTION from '../../data'
const Form = (props) => {
  const [title, setTitle] = useState('Add Task');
  const [category, setCategory] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      title: event.target.title.value,
      category: event.target.category.value,
      urgent: event.target.urgent.checked,
      id: new Date(),
      isDone: false,
    }
    props.onAddItem(newItem);

    setTitle("");
    setCategory("");
    setIsUrgent(false);

  }

  const onTitleChange = (event) => {
    let title = event.target.value;
    title = title.replace(".", " ");
    title = title.replace("-", " ");
    setTitle(title);
  }

  const Hi = () => {
    console.log("this is the test");
  }
  return (
    <div className="form-group container">
      <form onSubmit={handleSubmit} className="formStlye" >
        <div className='formStlye'>
          <label className=''>Title</label>

          <input
            placeholder="Title"
            name="title"
            type="text"
            value={title}
            onChange={onTitleChange}
            required
            className='form-control col-8 form-control-sm'
          />

        </div >
        <div className='NameSelect form-group mt-2'>
          <label className=''>Select Category</label>
          <select
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select form-select-sm"
          >
            <option value="" disabled>Select</option>
            {CATEGORES_OPTION.map(item => <option key={item.value}>{item.value}</option>)}
          </select>
        </div>
        <div className="d-flex justify-content-between align-items-end mt-2">

          <input type="submit" value="Add to List" className="btn btn-primary btn-sm mt-1 btn-danger" />
          <div className='form-check mt-2 '>
            <input
              name="urgent"
              type="checkbox"
              checked={isUrgent}
              onChange={(e) => setIsUrgent(e.target.checked)}
              className="form-check-input "
            />

            <label className='form-check-label'>Urgent</label>
          </div>
        </div>
      </form>
    </div>
  )
};

export default Form;