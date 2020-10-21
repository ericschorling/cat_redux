import React from 'react';
import {connect} from "react-redux"
import {eat, play, nap} from "../redux/actions"

const Activity = ({activity, eat, play, nap}) => {
    return (
        <div>
            <h1>What is the cat doing now???</h1>
            <p>The cat is {activity}</p>
            <button type='button' onClick={()=>eat()}>
                Eating
            </button>
            <button type='button' onClick={()=>play()}>
                Playing
            </button>
            <button type='button' onClick={()=>nap()}>
                Napping
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    const {activity} = state;
    return activity;
}


export default connect(mapStateToProps, {eat, play, nap})(Activity)