import React,{useEffect, useState, useLocation} from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import Form from './Form'
const Article = (props) => {
    // const location = useLocation()
    const [isDisplayForm,setIsDisplayForm] = useState(false);
    const updateTitle = () => {
        setIsDisplayForm(true)
    }
    return(
        <div>
            <div onClick={updateTitle}>{props.obj.title}</div>
            {isDisplayForm ? <Form {...props.obj} setFlag={setIsDisplayForm}/> : null}
        </div>
    )
}

export default withRouter(Article) ;