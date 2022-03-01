import { evaluate } from 'mathjs';
import { useState } from 'react';
import * as math from "mathjs"
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";


const App = () => {

  const [result, setResult] = useState("");
  const [digit, setDigit]= useState("");
  const btnColor = "#f2a33c";

  const addDigit = (val) => {
    setDigit((digit) => [...digit, val + " "]);
  };

  const clear = () => {
    setDigit("");
    setResult("");
  };

  const digitSign = () => {
  };

  const calculResult = () => {
    const input = digit.join("");

    setResult(math.evaluate(input));
  }

  return (
    <div className="App">
     <div className='container'>
       <Input digit = {digit} result= {result}/>
       <div className='row'>
         <Button value="C" doTask={clear}/>
         <Button value="-/+" doTask={digitSign}/>
         <Button value="%"/>
         <Button value="/" color={btnColor} doTask={addDigit}/>
       </div>
       <div className='row'>
         <Button value="7" doTask={addDigit}/>
         <Button value="8" doTask={addDigit}/>
         <Button value="9" doTask={addDigit}/>
         <Button value="*" color={btnColor} doTask={addDigit}/>
       </div>
       <div className='row'>
         <Button value="4" doTask={addDigit}/>
         <Button value="5" doTask={addDigit}/>
         <Button value="6" doTask={addDigit}/>
         <Button value="-" color={btnColor} doTask={addDigit}/>
       </div>
       <div className='row'>
         <Button value="1" doTask={addDigit}/>
         <Button value="2" doTask={addDigit}/>
         <Button value="3" doTask={addDigit}/>
         <Button value="+" color={btnColor} doTask={addDigit}/>
       </div>
       <div className='row'>
         <Button value="&nbsp;&nbsp;&nbsp;&nbsp;0" doTask={addDigit}/>
         <Button value="" disabled/>
         <Button value="." doTask={addDigit}/>
         <Button value="=" color={btnColor} doTask={calculResult}/>
       </div>
     </div>
    </div>
  );
}

export default App;
