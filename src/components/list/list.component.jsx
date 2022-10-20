import "./list.css"; 

export default function List({items}) {
  return (
    <div>
      <ul>
       {
        items.map(item => (
            <li>
                {item.title} - {item.category} - {item.urgent ? 'URGENT':'NOT URGENT'}
            </li>
        ))
       }
      </ul>
    </div>
  )
}
