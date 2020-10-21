import React from 'react'
import {connect} from "react-redux"
import { changeActivity} from "../redux/actions"
import Activity from './Activity'


const AnimalList = ({animals,changeActivity}) => {
    return (
        <ul>
            {animals && animals.length ? animals.map((animal,index)=>
            (<li key={index}>
                {animal.name}
                <button>napping</button>
            </li>))
            :null}
        </ul>
    )
}

const mapStateToProps = state => {
    const {animals} = state;
    return (animals);
}


export default connect(mapStateToProps, {changeActivity})(AnimalList)
