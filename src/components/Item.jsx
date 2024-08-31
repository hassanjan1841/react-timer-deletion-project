import React ,{useEffect,useState} from 'react'
function Item({ item,deleteItem }) {

  const [timer, setTimer] = useState(5);

  useEffect(() => {
    let timing;
    if (timer >= 0) {
      timing = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    if(timer === 0){
      clearInterval(timing)
    }
    return ()=>{
      clearInterval(timing)
    }
  }, [timer]);
  if(timer===0){
    deleteItem(item)
  }
  

  return (
    <div
      style={{ color: item.textColor, backgroundColor: item.backgroundColor }}
    
      className={`flex items-center justify-center w-[300px] h-[300px] text-2xl font-bold underline text-center rounded-md relative`}
    >
      {item.inputText}
      <span className="text-sm text-white absolute bottom-5 right-5">
        {timer}s
      </span>
    </div>
  );
}
export default Item;
