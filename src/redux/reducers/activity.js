import {ACTION_SET_ACTIVITY, ACTION_SET_NAME, ACTION_ADD_ANIMAL, ACTION_CHANGE_LIST } from '../actionsTypes'


const initialState = {
    name:'Guster',
    activity: "blep",
    animals:[]
}

const activityReducer = (state = initialState, action)=>{
    switch(action.type) {
        case ACTION_SET_ACTIVITY: {
            return {
                ...state,
                activity: action.payload.activity
            }
        }
        case ACTION_SET_NAME: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        case ACTION_ADD_ANIMAL: {
            const {name, activity} = action.payload.animal
            return {
                ...state,
                animals: [...state.animals, action.payload.animal]
            }
        }
        case ACTION_CHANGE_LIST: {
            const {id, activity} = action.payload
            console.log(id)
            let newArr = [...state.animals]
            newArr[id] = {...newArr[id], action: activity}
            return{
                ...state,
                animals: newArr
            }
        }
        default:
            return state
    }
}

export default activityReducer
