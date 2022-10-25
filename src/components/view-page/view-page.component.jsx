import List from "../list/list.component";

export default function ViewPage({ items, onDelete, onCheck }) {
  return (
    <div>
      {items.length === 0 ? (
        <div className="list container">
          <h3 style={{ textAlign: "center" }}>No items found</h3>
        </div>
      ) : (
        <List items={items} onDelete={onDelete} onCheck={onCheck} />
      )}
    </div>
  );
}
