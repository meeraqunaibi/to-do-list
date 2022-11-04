import { useState } from 'react';
import './form.css';
import Categories_Options from '../../constants/data'

const Form = (props) => {
    const [title, setTitle] = useState("Go Swim");
    const [category, setCategory] = useState('');
    const [isUrgent, setIsUrgent] = useState(false);

    const handelSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            id: new Date(),
            isDone: false,
            title: event.target.title.value,
            urgent: event.target.urgent.checked,
            category: event.target.category.value,

        }
        if (newItem.category === "") {
            alert(" please chose in select ");
            return;
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
                <label> Form</label>
                <input name="title" type="text" value={title} onChange=
                    {onTitleChange} />
                <select name="category" placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="" >select</option>
                    {Categories_Options.map(item => (

                        <option value={item.value} key={item.value}>{item.label}</option>

                    ))}
                </select>

                <input name="urgent" type="checkbox" checked={isUrgent} onChange={(e) => setIsUrgent(e.target.checked)}></input>
                <label >Urgent</label>

                <input type="submit" value="add to List"></input>
            </form>
        </div>
    )
};
export default Form;