import React from "react";

const Item = React.memo(
  ({ id, name, price, count, onIncrement, onDelButton, onDecrement }) => {
    const totalAmount = () => {
      return count * price;
    };
    // TODO: don't delete this console.log!
    console.log(`render item ${id}`);

    return (
      <div className="cart-item">
        <div className="details-wrapper">
          <span className="name">{name}</span>
          <span>
            price: <span className="price">${price}</span>
          </span>
        </div>

        <dl className="counter-wrapper">
          <dt>count</dt>
          <dd>
            <button className="decrement" onClick={() => onDecrement(id)}>
              -
            </button>
            <span className="count">{count}</span>
            <button className="increment" onClick={() => onIncrement(id)}>
              +
            </button>
          </dd>
        </dl>

        <div className="amount-wrapper">
          <span className="label">amount:</span>
          <span className="amount">${totalAmount()}</span>
        </div>

        <button className="delete-item" onClick={() => onDelButton(id)}>
          x
        </button>
      </div>
    );
  }
);

export default Item;
