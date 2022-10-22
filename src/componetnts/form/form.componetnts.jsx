import { useState } from 'react';
import './form.css'
import Category_option from './data.js';
const Form = (props) => {
    const [title, setTitle] = useState('Go Swim');
    const [Category, setCategory] = useState('Category');
    const [Categoryy, setCategoryy] = useState('');
    const [urgent, setUrgent] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.title.value);
        const newItem = {
            title: event.target.title.value,
            category: event.target.category.value,
            urgent: event.target.urgent.checked,

        }

        props.onAddFunction(newItem);
        setTitle("");
        setCategoryy("");
        setUrgent(false);

    }

    const onTitleChange = (event) => {
        let title = event.target.value;
        title = title.replace(".", "-");
        title = title.replace(" ", "-");
        setTitle(title);
    }
    const onCategoryChange = (event) => {
        let Category = "Your Category Is" + event.target[event.target.selectedIndex].text;
        setCategory(Category);
    }
    const [namee, setName] = useState(["mohammad", "nidal", "rajbe", "ana"]);
    const arr = ["mohammad", "nidal", "rajbe", "ana"];
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Title'
                    type="text"
                    name='title'
                    value={title}
                    onChange={onTitleChange}
                />
                <select
                    value={Categoryy}
                    name='category' /*onChange={onCategoryChange}*/
                    onChange={(e) => { setCategoryy(e.target.value) }}
                    placeholder='CategoryS'>
                    <option value="" disabled>select</option>
                    {
                        Category_option.map((option, index) => (
                            <option key={option.value + index} value={option.value}>{option.label}</option>

                        ))
                    }
                    {/*                     
                    <option value="work">Work</option>
                    <option value="home">Home</option>
                    <option value="personal">Personal</option> */}
                </select>
                <div className='chBox'>
                    <input checked={urgent}
                        onChange={(e) => { setUrgent(e.target.value) }}
                        type="checkbox"
                        name='urgent' />
                    <label htmlFor="">Urgent</label>
                </div>
                <input id='submit' type="submit" value='Add To List' />
            </form>
            <h3>{Categoryy}</h3>
            {/* <ul> */}
            {
                /* namee.map((name,index)=><li>{name}-{name.toUpperCase()-{index}}</li>)
                arr.map(name=>{
                  
                
                <li>{name}-{name.toUpperCase()}</li>
              
              
              })
              */
            }
            {/* </ul> */}

        </div>
    );
}
export default Form;