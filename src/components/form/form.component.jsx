import { useState } from 'react';
import './form.css'
const Form = (props) => {
    const [title, setTitle] = useState("Go Swim");
    const [category, setCategory] = useState('');
    const [isUrgent, setIsUrgent] = useState(false);

    const handelSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            title: event.target.title.value,
            urgent: event.target.urgent.value,
            category: event.target.category.value,

        }
        props.onAddItem(newItem);
        console.log(newItem);
        setTitle("");
        setCategory("");
        setIsUrgent(false);
    }
    const onTitleChange = (event) => {
        let title = event.target.value;
        title = title.replace(" ", "-");

        setTitle(title);

    }
    return (
        <div className='form'>
            <form onSubmit={handelSubmit}>
                Form
                <input name="title" type="text" value={title} onChange=
                    {onTitleChange} />
                <select name="category" placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="" >Select</option>
                    <option value="work">Work</option>
                    <option value="home">Home</option>
                    <option value="personal">Personal</option>
                </select>

               <input name="urgent" type="checkbox" checked={isUrgent} onChange={(e) => setIsUrgent(e.target.checked)}></input>
               <label >Urgent</label>
               
                <input type="submit" value="add to List"></input>
            </form>
        </div>
    )
};
export default Form;