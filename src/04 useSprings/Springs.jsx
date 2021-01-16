import React from 'react'
import {useSprings,animated} from 'react-spring';

/* 

useSprings(animationAmount,arrayDataForAnimation)
1.-AnimationObjects amount
2.-Data of the AnimationObjects.
Will create as much AnimationObjects as the amount given.
If 1 is larger than 2, there will be empty AnimationObjects
If 2 is larger than 1, there will be only the 1 amount established.
If 1 is and object then the iteration creation will count only 1 element

2-> dataSet.map( item => ({ opacity: 0.5, transform: scale(1.1),...}) )


*/

export default function Springs({isMove,...props}) {
    const dataToShow = 
    ["lore","impsu","dolo","sit",
    "amet","consectetur","adipis","Neque",
    "porro","quisquam","dolo","est"
    ];
   


/*     const appearAnimations = useSprings(dataToShow.length,
        dataToShow.map(
            (item,index,arrayItSelf) => {


                return {
                    from:{
                        
                        transform: `translateX(${index%2 ?120:-120}%)`
                    },
                    
                    transform: `translateX(0)`,
                   reverse:!isMove 

                }

            }
        )    
    )
 */
    const [appearAnimations,setAppearAnimations,stopAppearAnimations] = useSprings(dataToShow.length,
        
        index=>(
            {        
                /* opacity: index%2 ? 0 : 1, */
                transform: `translateX(${index%2 ?120:-120}%)`,            
            }
        
        )
    )

    setAppearAnimations((index) =>(
        {
            transform: isMove?`translateX(0)`:`translateX(${index%2 ?120:-120}%)`,
        }
    ))       

    return (
        <div className="list-container">

            <ul className="list-items">
                {/* O iterar sobre el array de animaciones */
                dataToShow&&dataToShow.map((item,index,arrayItSelf) =>
                    <animated.li key={index} style={appearAnimations[index]} >{item}</animated.li>
                )}
            </ul>        
        </div>
    )
}


