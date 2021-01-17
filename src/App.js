import React, { useState } from "react";
import Estructura from "./02 Estructura/Estructura";
import Springs from "./04 useSprings/Springs";
import TrailTable from "./05 useTrail/TrailTable";
import Login from "./05 useTrail/Login";


function App() {
  const [move, setMove] = useState(false);

  const clickHandler = () => {
    setMove((lastState) => !lastState);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <Estructura isMove={move} ></Estructura>

       
 */}
        <button className="button" onClick={clickHandler}>
          Click
        </button>
        {/* <Login></Login> */}

        {/*  <Springs isMove={move}></Springs> */}
        {/* <Trail></Trail> */}
        <TrailTable></TrailTable>
        <Login></Login>
      </header>
    </div>
  );
}

export default App;
