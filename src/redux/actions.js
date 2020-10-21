import { ACTION_SET_NAME, ACTION_SET_ACTIVITY, ACTION_ADD_ANIMAL, ACTION_CHANGE_LIST} from "./actionsTypes"

export const changeActivity = (activity) =>{
    return {
        type: ACTION_SET_ACTIVITY,
        payload:{
            activity: activity
        }
    }
}

export const changeName = (name) =>{
    return {
        type: ACTION_SET_NAME,
        payload:{
            name: name
        }
    }
}

export const addAnimal =(animal) =>{
    return {
        type: ACTION_ADD_ANIMAL,
        payload:{
            animal: {
                name: animal.name, 
                action: animal.activity
            }
        }
    }
}

export const changeListAction =(index, activity)=>{
    return {
        type: ACTION_CHANGE_LIST,
        payload:{
            id:index,
            activity:activity
        }
    }
}