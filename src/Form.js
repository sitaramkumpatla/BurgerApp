import React,{useState} from 'react'
import { connect } from 'react-redux'
import {addArticle,updateArticle} from './redux/ActionCreators'

const Form = (props) => {
    const prevId = props.id;
    const [article,setArticle] = useState({
        title : props.title ? props.title : '',
        id: props.id ? props.id : '' 
    })

    const changeHandler = (event) =>{
        setArticle({
            title:event.target.value,
            id: prevId ? prevId : '5'
        })        
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if(prevId){
            props.setFlag(false)
            props.updateArticleProp(article);
        }
        else{
            props.addArticleProp(article)
        }
        
        setArticle({...article,title:'',id:''})
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' value={article.title} onChange={changeHandler}/>
            <button type='submit'>Submit</button>
            {/* {props.match.params} */}
        </form>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addArticleProp : article => dispatch(addArticle(article)),
        updateArticleProp : article => dispatch(updateArticle(article))
    }
}

export default connect(null, mapDispatchToProps)(Form)