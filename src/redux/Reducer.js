import {ADD_ARTICLE, UPDATE_ARTICLE} from './Actions'

const initialState = {
    articles : [{title:'React Redux for biggeners',id:'1'},
    {title:'React Redux for professionals',id:'2'}]
}
export const reducer = (state = initialState,action) => {
    if(action.type === ADD_ARTICLE){
        const newstate = Object.assign({},state,{articles : state.articles.concat(action.payload)})
        return newstate;
    }
    if(action.type === UPDATE_ARTICLE){
        const newArticles = state.articles.map(obj => {
            if(obj.id === action.payload.id)
                obj.title = action.payload.title;
            return obj;
        })
        const newState = {...state,articles : [...newArticles]}
        return newState;
    }
    return state;
}