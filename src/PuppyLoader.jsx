import React from 'react';
import { puppyList } from './puppyList';
const PuppyLoader = () => {
    const puppies = puppyList;
    return (
        <>
            <div>
                {
                puppies.map((puppy, i) => {
                    return (
                        <div key={puppy.id}>
                                <p>Name: {puppy.name}</p>
                                <p>Age: {puppy.age}</p>
                                <p>Is Cute: {puppy.isCute ? 'Yes' : 'No'}</p>
                                <p>Email: {puppy.email}</p>
                                <p>Owner Id: {puppy.ownerId}</p>
                            Tricks: <br />
                            `<p>{puppy.tricks.map((trick, i) => { return <p key={trick.id}>{trick.title}</p> })}</p>`
                    </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default PuppyLoader