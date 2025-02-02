import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Statistics from "./Statistics";

function App() {
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
  ];

  return (
    <>
      <Logo />
      <Form />
      <PackingList itemList={itemList} />
      <Statistics />
    </>
  );
}

export default App;
