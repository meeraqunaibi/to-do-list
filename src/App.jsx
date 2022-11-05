import { useEffect, useState } from 'react';
import './App.css';
import Header from '../src/components/header/header.component';
import AddItemPage from '../src/components/pages/add-item/add-item.page';
import ViewItemsPage from '../src/components/pages/view-items/view-items.page';

const ReadItems = () => JSON.parse(localStorage.getItem('todoList') || '[]');

function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('view');
  const [loading, setLoading] = useState(false);
  const [sure, setSure] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("Fetching Items...");
    setTimeout(() => {
      const items = ReadItems();
      setItems(items);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (items !== null) {
      console.log("Items has changed!");
      localStorage.setItem('todoList', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  }
  //************* */
  const delateItem = (id) => {
    alert("you sure delete this task")
    
    setSure(true);

    const newItemsData = items.filter(it => it.id !== id);
    setItems(newItemsData);
  }

  const Complete = (id) => {
    const newitem = items.map(item => item.id === id ? { ...item, isDone: true } : item);
    setItems(newitem);
  }

  return (
    <>
      <div className="App">
        <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div className="container">
          {currentPage === 'add' && <AddItemPage addItem={addItem} />}
          {currentPage === 'view' &&
            <ViewItemsPage
              loading={loading}
              items={items || []}
              Complete={Complete}
              delateItem={delateItem} />
          }
        </div>
      </div>
    </>
  );
}
export default App;