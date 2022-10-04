import Item from "./Item";
import React from "react";

const ItemList = React.memo(
  ({ items = [], onIncrement, onDecrement, onDelete }) => {
    return (
      <div className="item-list">
        {items.map(({ id, name, price, count }) => (
          <Item
            key={id}
            name={name}
            price={price}
            count={count}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelButton={onDelete}
            id={id}
          />
        ))}
      </div>
    );
  }
);

export default ItemList;
