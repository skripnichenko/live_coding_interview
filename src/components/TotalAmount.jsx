const TotalAmount = ({ items = [] }) => {
    const total = () => {
      return items.reduce((acc, { price, count }) => {
        return (acc += price * count);
      }, 0);
    };
  
    return <h2>Total amount: ${total()}</h2>;
  };
  
  export default TotalAmount;
  