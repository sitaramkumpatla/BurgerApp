import {ADD_ARTICLE,UPDATE_ARTICLE} from './Actions'

export const addArticle = (payload) => {
    return {
        type : ADD_ARTICLE,
        payload : payload
    }
}

export const updateArticle = (payload) =>{
    return {
        type: UPDATE_ARTICLE,
        payload: payload
    }
}