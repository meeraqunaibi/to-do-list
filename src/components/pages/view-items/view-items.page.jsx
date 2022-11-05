import { useEffect, useState } from 'react';
import './view-items.css';
import loadingImg from '../../../assits/loading.gif';
import List from '../../list/list.component';

const ViewItemsPage = (props) => {

  const [time, setTime] = useState(new Date());

  const updateTime = () => {
    setTime(new Date());
  }
  useEffect(() => {
    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="view-items">
      <div className="clock">{time.toLocaleTimeString()}</div>
      {
        props.items.length > 0
          ? <List items={props.items} onDelate={props.delateItem} onComplete={props.Complete} />
          : props.loading
            ? <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <img src={loadingImg} alt="loading" width={120} />
            </div>
            : <h2>No Items Added!</h2>
      }
    </div>
  )
};

export default ViewItemsPage;