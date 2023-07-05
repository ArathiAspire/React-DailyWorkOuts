import { useRef } from 'react';
import './App.css';
import MyInput from './MyInput';

function App() {
  const ref=useRef(null)
  const handleClick=()=>{
    ref.current.focus()
  }
  return (
   
    <form>
      <MyInput label="Enter your name:" ref={ref}/>
      <button type='button' onClick={handleClick}>Edit</button>
    </form>
  );
}

export default App;
