import React,{useState} from 'react'
import {useSpring,animated} from 'react-spring'

/* 
main-container


button-action
button-toggle
*/
export default function Login() {

    const [move,setMove] = useState(false);

    const animationMove = useSpring({
        from:{
            left:`${!move?"5%":"50%"}`
        },
        left:`${move?"5%":"50%"}`

    });
    
    const animationFormMove = useSpring({
        from:{
            transform: `translate(${!move?-100:0}%)`
        },
        transform: `translate(${move?-100:0}%)`

    })

    const handlerLogin = (e) => {
        setMove(true)
    }
    
    const handlerSignUp = (e) => {
        setMove(false)
    }

    return (
        <div className="main-container" >
           
          <div className="main-container__option-toggle">
              <h3>Have an account?</h3>
              <button type="button" className="button-toggle" onClick={handlerLogin}>Log in</button>
          </div>

          <div className="main-container__option-toggle">
              <h3>Don't have an account?</h3>
              <button type="button" className="button-toggle" onClick={handlerSignUp}>Sign up</button>
          </div>
          
          <animated.div style={animationMove} className="main-container__option-viewport">

            <animated.div style={animationFormMove} className="main-container__option-form">
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Full Name"></input>
                <input type="text" placeholder="UserName"></input>
                <input type="text" placeholder="Password"></input>
                <button type="button" className="button-action">Sign Up</button>
            </animated.div>
            <animated.div style={animationFormMove} className="main-container__option-form">
                <input type="text" placeholder="UserName"></input>
                <input type="text" placeholder="Password"></input>
                <button type="button" className="button-action">Log in</button>
            </animated.div>
          </animated.div>

        </div>
    )
}
