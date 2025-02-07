import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Statistics from "./Statistics";

function App() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(2);

  const itemList = [
    {
      id: 1,
      description: "Coffee",
      quantity: 10,
      packed: false,
    },
    {
      id: 2,
      description: "Mac Book Air",
      quantity: 1,
      packed: false,
    },
    {
      id: 3,
      description: "Hand bags",
      quantity: 3,
      packed: false,
    },
    {
      id: 4,
      description: "Phone Charger",
      quantity: 11,
      packed: false,
    },
    {
      id: 5,
      description: "Apple Fruits",
      quantity: 3,
      packed: false,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    console.log(newItem);

    setDescription("");
    setQuantity(2);
  };

  return (
    <>
      <Logo />
      <Form
        description={description}
        setDescription={setDescription}
        quantity={quantity}
        setQuantity={setQuantity}
        handleSubmit={handleSubmit}
      />
      <PackingList itemList={itemList} />
      <Statistics />
    </>
  );
}

export default App;
