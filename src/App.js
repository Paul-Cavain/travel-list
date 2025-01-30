import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Statistics from "./Statistics";

function App() {
  const items = ["Coffee", "handBags", " Cover", "Maiza", "Mac Book Air"];

  return (
    <>
      <Logo />
      <Form />
      <PackingList items={items} />
      <Statistics />
    </>
  );
}

export default App;
