import React,{useState} from 'react';
import {useSpring,animated} from 'react-spring';


/* 
1.- useSate
2.- Array Deconstructing
3.- Lift state up (delegar el re-render a un componente padre)

*/
export default function Estructura({isMove,...props}) {

  
    const animationMove = useSpring({
        transform:`translateX(${isMove?250:0}px)`,
        "backgroundColor":`#${isMove?"000":"FA0"}`,
        color:`#${!isMove?"000":"FFF"}`
    })

        

    return (
        <animated.div style={animationMove} className="componente-prueba" >
            Soy un DIV
        </animated.div>
    )
}
