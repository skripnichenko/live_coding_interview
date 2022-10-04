import Title from "./Title";
import ItemList from "./ItemList";
import TotalAmount from "./TotalAmount";
import { useCallback, useState } from "react";

const initialState = [
  { id: 1, price: 4700, name: "Printer", count: 0 },
  { id: 2, price: 3800, name: "Motherboard", count: 0 },
  { id: 3, price: 500, name: "Mouse", count: 0 }
];

const Cart = () => {
  const [items, setItems] = useState(initialState);

  const onIncrement = useCallback((id) => {
    setItems((prev) =>
      prev.map((item) =>
        id !== item.id ? item : { ...item, count: item.count + 1 }
      )
    );
  }, []);
  const onDecrement = useCallback((id) => {
    setItems((prev) =>
      prev.map((item) =>
        id !== item.id
          ? item
          : { ...item, count: item.count - 1 <= 0 ? 0 : item.count - 1 }
      )
    );
  }, []);

  const onDelButton = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <div className="cart">
      <Title />

      <ItemList
        items={items}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelButton}
        setItems={setItems}
      />

      <TotalAmount items={items} />
    </div>
  );
};

export default Cart;
