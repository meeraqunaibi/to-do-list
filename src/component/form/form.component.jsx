import React, { useState } from 'react';
import './form.css';

const Form = (props) => {

    const [title, setTitle] = useState('Go text');
    const [select, setSelect] = useState();
    const [urgent, setUrgent] = useState(false);
    const HandelSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.title.value);
        // console.log(event.target.category.value);
        // console.log(event.target.urgent.checked);
        const newItem = {
            id: Date.now(),
            isDone: false,
            title: event.target.title.value,
            category: event.target.category.value,
            urgent: event.target.urgent.checked

        }
        console.log(newItem)
        props.onAddItem(newItem)
        setTitle("")
        setSelect("")
        setUrgent(false)
    }
    const handelChange = (event) => {
        let title = event.target.value
        title = title.replace('.', '-')
        setTitle(title)
    }
    return (
        <div>
            <h1>To-Do-APP</h1>
            <form onSubmit={HandelSubmit} >
                <input type="text"
                    name='title'
                    placeholder='title'
                    value={title}
                    onChange={handelChange}

                />

                <select name="category"
                    value={select}
                    //  onChange={handelChange}
                    onChange={(e) => setSelect(e.target.value)}
                >
                    <option value="" disabled="">select</option>
                    <option value="work">Work</option>
                    <option value="home">Home</option>
                    <option value="personal">Personal</option>
                </select>

                <input type="checkbox"
                    name="urgent"
                    checked={urgent}
                    onChange={(h) => setUrgent(h.target.checked)}
                />
                <label name='urgent'>Urgent</label>
                <input className='submit' type="submit" value="Add to List" />
            </form>

        </div>
    )
}

export default Form;