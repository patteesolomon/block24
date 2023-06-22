import React, {useState} from 'react';
import { PuppyLoader } from './PuppyLoader';

/*
🔴 Do not call Hooks inside conditions or loops.
🔴 Do not call Hooks after a conditional return statement.
🔴 Do not call Hooks in event handlers.
🔴 Do not call Hooks in class components.
🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
*/
const [isShow, s] = useState(false);
function PupperListPage()
{
    function timl()
    {
        (isShow === true) ? setIsShow(false) : setShowStats(true);
    }
    return (
        <>
            <div>
                <PuppyLoader puppy = {puppy} key = {id} />
                        <button onClick={timl}>
                            {
                                isShow ? 'Hide' : 'Show'
                            }
                        </button>
                        (<p> Name {puppy.name} 
                                <br/>
                                Age {puppy.age}
                                <br/>
                                Is Cute: {puppy.isCute ? 'Yes' : 'No'}
                                <br/>
                                Email {puppy.email}
                                <br/>
                                Owner Id {puppy.ownerId}
                                <br/>
                                Tricks
                                {puppy.tricks.map((trick, i) => {
                                    return <p key={trick.id}>{trick.title}</p>
                                }
                        )}
                    : {isShow = false}</p>)
            </div>
        </>
    );
}

export default PupperListPage;