import React,{useState} from 'react'
import Estructura from './02 Estructura/Estructura';
import Login from './03 Login/Login';
import Springs from './04 useSprings/Springs';

function App() {

  const [move,setMove] = useState(false);

  const clickHandler= ()=>{
    setMove((lastState)=>!lastState)
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <Estructura isMove={move} ></Estructura>

       
 */}
    <button className="button" onClick={clickHandler}>Click</button>
    {/* <Login></Login> */}

      <Springs isMove={move}></Springs>

      </header>
    </div>
  );
}

export default App;
