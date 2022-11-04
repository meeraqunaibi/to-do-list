import './list.css';
// import Categories_Options from '../../constants/data';

import Item from './item.component';

const List = (props) => {
    // console.log(props.items);
    /** @param{{
      items:{
                title:event.target.title.value,
                urgent:event.target.urgent.value,
                category:event.target.category.value,
    
            }[]}}props
            */
    return (
        <div className='list'>
            <ul>
                {
                    props.items.map(item => (
                        <Item
                            key={item.id} item={item}
                            onDelete={props.onDelete}
                            onFinish={props.onFinish}
                        />
                    ))
                }
            </ul>

        </div>
    )

}
export default List;