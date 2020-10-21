import React, { useState } from 'react';
import {connect} from "react-redux"
import {addAnimal, changeActivity, changeName, changeListAction} from "../redux/actions"
import AnimalList from './AnimalList';

const Activity = ({animals,activity,name,changeActivity, changeName, addAnimal, changeListAction}) => {
    const [input, setInput] = useState('')
    const _handleChange =(name)=>{
        setInput(name)
    }
    return (
        <div>
            <h1>What is the cat doing now???</h1>
            <p>{name} is {activity}</p>
            <select onChange={(event)=>changeActivity(event.target.value)}>
                <option>Eating</option>
                <option>Playing</option>
                <option>Napping</option>
            </select>
            {/* <button type='button' onClick={()=>changeActivity('eating')}>
                Eating
            </button>
            <button type='button' onClick={()=>changeActivity('playing')}>
                Playing
            </button>
            <button type='button' onClick={()=>changeActivity('napping')}>
                Napping
            </button> */}
            <input value={input} onChange={(event)=>_handleChange(event.target.value)}></input>
            <button type='button' onClick={()=>changeName(input)}>Change Name</button>
            <button type='button' onClick={()=>addAnimal({name: name, activity: activity})}>Add Animal</button>
            <ul>
                {animals&&animals.length?animals.map((animal,index)=> (
                    <li key={index}>
                        {animal.name} is {animal.action}
                        <button type='button' onClick={()=>changeListAction(index,'eating')}>
                            Eating
                        </button>
                        <button type='button' onClick={()=>changeListAction(index,'napping')}>
                            Napping
                        </button>
                        <button type='button' onClick={()=>changeListAction(index,'playing')}>
                            Playing
                        </button>
                    </li>
                )):null}
            </ul>
            
        </div>
    )
}

const mapStateToProps = state => {
    const {name, activity} = state;
    return (name,activity);
}


export default connect(mapStateToProps, {changeActivity, changeName, addAnimal, changeListAction})(Activity)