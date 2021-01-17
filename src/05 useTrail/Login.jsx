import React,{useState} from 'react'
import {useTrail,useSpring,animated} from 'react-spring'

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

    const trailSignUp = useTrail(5, {
        from: {
          transform: `translateX(${!move ? -100 : 0}%)`,
        },
        transform: `translateX(${move ? -100 : 0}%)`,
        config: { mass: 1, tension: 266, friction: 16,clamp:true },

      });
    
      const trailLogin = useTrail(3, {
        from: {
          transform: `translateX(${!move ? 0 : 100}%)`,
        },
        transform: `translateX(${move ? 0 : 100}%)`,
        
      });

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
                <animated.input style={trailSignUp[0]} type="text" placeholder="Email"></animated.input>
                <animated.input style={trailSignUp[1]} type="text" placeholder="Full Name"></animated.input>
                <animated.input style={trailSignUp[2]} type="text" placeholder="UserName"></animated.input>
                <animated.input style={trailSignUp[3]} type="text" placeholder="Password"></animated.input>
                <animated.button style={trailSignUp[4]} type="button" className="button-action">Sign Up</animated.button>
            </animated.div>
            <animated.div style={animationFormMove} className="main-container__option-form">
                <animated.input style={trailLogin[0]} type="text" placeholder="UserName"></animated.input>
                <animated.input style={trailLogin[1]} type="text" placeholder="Password"></animated.input>
                <animated.button type="button" className="button-action">Log in</animated.button>
            </animated.div>
          </animated.div>

        </div>
    )
}
