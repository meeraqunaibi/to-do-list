import { useState } from 'react';
import CATIGORY_OPTION from '../../constants/data';
import './form.css';
const Form = (props) => {
  const [title, settitle] = useState('go');
  const [category, setcategory] = useState('');
  const [isurgent, setisurgent] = useState(false);

  const handlesubmit = (event) => {
    event.preventDefault();
    const newitem = {
      id:new Date(),
      title: title,
      category: event.target.category.value,
      urgent: event.target.urgent.checked

    }

    props.onAddItem(newitem);
    settitle("");
    setcategory("");
    setisurgent(false);
  }

  const handletitlechange = (event) => {
    let title = event.target.value;
    title = title.replace('.', '-');
    title = title.replace('*', '-');
settitle(title);
   
  }
 
  return (
    <div className='form'>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='title'  value={title}  onChange={handletitlechange} />
        <select name="category" placeholder='category' value={category} onChange={(e) => setcategory(e.target.value)}>
          {/* <option value="work">work</option>
          <option value="home">home</option>
          <option value="personal">personal</option> */}
          <option value="" disabled>Select</option>
          {
 CATIGORY_OPTION.map(item=>(
  <option value={item.value} key={item.value}> {item.label}</option>

 ))
          }
         
        </select>
        <input type="checkbox" name='urgent' checked={isurgent} onChange={(e) => setisurgent(e.target.checked)} />
        <label >urgent</label>
        <input type="submit" value='addtolist' />
      </form>

    </div>);

}
export default Form