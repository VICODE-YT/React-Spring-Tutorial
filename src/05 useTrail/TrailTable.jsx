import React, { useState } from "react";
import { useTrail, animated } from "react-spring";

export default function TrailTable() {
  const [{ indexStartRender, dataToShow }, setDataToShow] = useState({
    indexStartRender: 0,

    dataToShow: data,
  });
  const trail = useTrail(dataToShow.length, {
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0)" },
    config: { mass: 1, tension: 266, friction: 16,clamp:true },
  });
  const clickHandler = (e, indexClicked) => {
    let a = dataToShow.splice(indexClicked, 1);
    a = dataToShow;
    setDataToShow({
      indexStartRender: indexClicked,
      dataToShow: a.map((item) => item),
    });
  };

  return (
    <table>
      <tr>
        <th>Firstname</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Phone</th>
      </tr>
      {trail &&
        trail.map((obj, index, arrayItSelf) => (
          <RowPerson
            key={dataToShow[index]}
            animation={index >= indexStartRender ?obj : {}}
            data={dataToShow[index]}
            click={(e) => clickHandler(e, index)}
          ></RowPerson>
        ))}
    </table>
  );
}

function RowPerson({ data, animation, click, ...props }) {
  return (
    <animated.tr onClick={click} style={animation}>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.gender}</td>
      <td>{data.phone}</td>
    </animated.tr>
  );
}
const data = [
  {
    name: "Virgie Underwood",
    age: 35,
    gender: "female",
    phone: "+1 (940) 447-2071",
  },
  {
    name: "Bernadette Savage",
    age: 26,
    gender: "female",
    phone: "+1 (912) 512-2554",
  },
  {
    name: "Casandra Patton",
    age: 21,
    gender: "female",
    phone: "+1 (996) 483-3304",
  },
  {
    name: "Norma French",
    age: 27,
    gender: "female",
    phone: "+1 (990) 565-3773",
  },
  {
    name: "Eva Mcintyre",
    age: 27,
    gender: "female",
    phone: "+1 (875) 502-2519",
  },
  {
    name: "Pope Sears",
    age: 28,
    gender: "male",
    phone: "+1 (803) 466-2501",
  },
  {
    name: "Moon Kaufman",
    age: 26,
    gender: "male",
    phone: "+1 (888) 416-3173",
  },
  {
    name: "Deana Richards",
    age: 37,
    gender: "female",
    phone: "+1 (851) 562-3981",
  },
  {
    name: "Bender Burch",
    age: 20,
    gender: "male",
    phone: "+1 (817) 481-2636",
  },
  {
    name: "Ruthie Edwards",
    age: 37,
    gender: "female",
    phone: "+1 (966) 487-3785",
  },
  {
    name: "Valentine Sanford",
    age: 29,
    gender: "male",
    phone: "+1 (868) 539-2363",
  },
  {
    name: "Rivas Conley",
    age: 28,
    gender: "male",
    phone: "+1 (817) 418-3354",
  },
];
