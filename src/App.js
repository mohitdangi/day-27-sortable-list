import React from "react";
import { useState } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
// import "./styles.css";


const SortableItem = sortableElement(({ value }) => <li>{value}</li>);


const SortableList = sortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

export default function App() {
  const [items, setItems] = useState(["Item 5", "Item 2", "Item 3"]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = [...items];
    console.log("old item", newItems);

    const [removed] = newItems.splice(oldIndex, 1);
    console.log("Removed item:", removed);

  
    newItems.splice(newIndex, 0, removed);
    console.log("new Item", newItems);

    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>Sortable List Example</h1>
      <SortableList items={items} onSortEnd={onSortEnd} />
    </div>
  );
}
