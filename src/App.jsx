import { useEffect, useRef, useState } from "react";
import ColorPickerForm from "./components/FilePicker";
import Item from "./components/Item";

function App() {
  const [components, setComponents] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleClick = (data) => {
    const compo = { ...data, id: counter };
    setComponents([...components, compo]);
    setCounter(counter + 1);
  };
  const deleteItem = (index) => {
    setComponents(components.filter((compo) => compo.id !== index.id));
  };

  console.log(components);
  return (
    <>
      <ColorPickerForm handleAddClick={handleClick} />
      <div className="flex items-center justify-start  gap-5 rounded-lg mt-14 flex-wrap">
        {components.map((item) => {
          return <Item key={item.id} item={item} deleteItem={deleteItem} />;
        })}
      </div>
    </>
  );
}

export default App;
