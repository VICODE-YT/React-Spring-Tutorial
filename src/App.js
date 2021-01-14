import React,{useState} from 'react'
import Estructura from './02 Estructura/Estructura';
import Login from './03 Login/Login';


function App() {

  const [move,setMove] = useState(false);

  const clickHandler= ()=>{
    setMove((lastState)=>!lastState)
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <Estructura isMove={move} ></Estructura>

        <button className="button" onClick={clickHandler}>Click</button>
 */}
      {/* <button className="button-action">Sign Up</button>
      <input type="text" text={"asd"} placeholder="Email"></input>
      <button className="button-toggle">Sign Up</button>
 */}

    <Login></Login>

      </header>
    </div>
  );
}

export default App;
