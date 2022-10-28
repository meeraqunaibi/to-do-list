import {useState} from 'react';
import './App.css';
// import Form from './components/form/form.component';
// import List from './components/list/list.component';
import Alert from './components/alert/alert.component';
import ViewItemsPage from './pages/view-items/view-item.page';
import AddItemPage from './pages/add-item/add-item.component';

function App() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('toDoList')) || '[]');
    const [currentPage, setCurrentPage] = useState(items.length>0?"view":"add");
    const [item, setItem] = useState(undefined);
    const addItem = (item) => {
        const newItems = [
            ...items,
            item
        ].sort((a, b) => b.urgent - a.urgent);
        setItems(newItems);

        localStorage.setItem("toDoList", JSON.stringify(items));
    }
    const deleteItem = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems)
        setItem(undefined);
        localStorage.setItem("toDoList", JSON.stringify(newItems));
    }
    const finishItem = (id) => {
        const newItems = items.map(item => item.id === id ? {
            ...item,
            isDone: true
        } : item).sort((a, b) => a.isDone - b.isDone);
        setItems(newItems);
        localStorage.setItem("toDoList", JSON.stringify(newItems));

    }

    const displayAlert = (item) => {
        item !== undefined ? setItem(item) : setItem(undefined);
    }
    return (
        <div className="App">
            <div className='header'>
                <h1>R-ToDOApp</h1>
                <button className={
                        currentPage === "add" ? 'active' : ""
                    }
                    onClick={
                        () => setCurrentPage("add")
                }>Add Item Page</button>
                <button className={
                        currentPage === "view" ? 'active' : ""
                    }
                    onClick={
                        () => setCurrentPage("view")
                }>View Items Page</button>

                {
                currentPage === "add" &&< AddItemPage addItem = {
                    addItem
                } />
            }
                {
                currentPage === "view" &&< ViewItemsPage items = {
                    items
                } displayAlert = {
                    displayAlert
                }
                finishItem = {
                    finishItem
                } />
            } </div>

            {
            item && <Alert onDelete={deleteItem}
                item={item}
                onPopUp={displayAlert}/>
        } </div>
    );
}

export default App;
