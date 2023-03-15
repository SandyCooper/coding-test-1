import React, {useState} from "react";
import Heading from "./heading";
import Entry from "./Entry";
import Transaction from "./Transaction";

function App() {

  const [show,setShow] = useState("");
  const [input,setInput] = useState("");
  const [array,setArray] = useState([]);
  const [isClick,setClick] = useState(false);

  const now = new Date();
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  const transTime = now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+(days[now.getDay()])+now.getHours()+":"  +now.getMinutes()+":"+now.getSeconds()+"."+(now.getMilliseconds())+"Z - ";


  function handleChange(event){
    const {value} = event.target;
    setShow(value);
    setClick(false);
  }

  function handleClickAdd(){
    setInput(prevValue => {
      return (Number(prevValue) + Number(show));
    })
    setArray(prevValue =>{
      return ([...prevValue,(transTime + show + " - " + "Add")]);
    });
    setClick(true);
  }

  function handleClickRemove(){
    setInput(prevValue => {
      return (Number(prevValue) - Number(show));
    })
    setArray(prevValue =>{
      return ([...prevValue,(transTime + show + " - " + "Remove")]);
    });
    setClick(true);
  }


  return (
    <div>
      <Heading />

      <Entry onClickAdd={handleClickAdd} onClickRemove={handleClickRemove} onInputChange={handleChange} click={isClick} changeInput={input} changeShow={show}/>
      
      <Transaction arrayItem={array}/>
    </div>
  );
}

export default App;
