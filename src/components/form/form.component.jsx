import { useState } from 'react';
import './form.css';
const Form = (props) => {
    const [title, settitle] = useState('go');
    const [category, setcategory] = useState('');
    const [isurgent, setisurgent] = useState(false);

    const handlesubmit = (event) => {
        event.preventdefualt();
        const newitem = {
            title: event.target.title.value,
            category: event.target.category.value,
            urgent: event.target.urgent.checked

        }

props.onAddItem(newitem)
    }

    const handletitlechange = (event) => {
        let title = event.target.value;
        title = title.replace('.', '-');
        title = title.replace('*', '-');
        title = title.replace('', '-');

        settitle('');
        setcategory('');
        setisurgent(false);
    }
    return (
        <div className='form'>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" placeholder='title' name='title' value={title} onChange={handletitlechange} />
                <select name="category" placeholder='category' value={category} onChange={(e)=>setcategory(e.target.value)}>
                    <option value="work">work</option>
                    <option value="home">home</option>
                    <option value="personal">personal</option>
                </select>
                <input type="checkbox" name='urgent' checked={isurgent} onChange={(e)=>setisurgent(e.target.checked)}/>
                <label >urgent</label>
                <input type="submit" value='addtolist' />
            </form>

        </div>);

}
export default Form