import React from 'react'
import {connect} from 'react-redux'
import {Link,Route,Switch,useLocation,withRouter} from 'react-router-dom'
import Article from './Article'
import Form from './Form'

const mapStateToProps = (state) => {
    return{
        articlesList : state.articles
    }
}

const Lists = (props) => {
    return(
        <div>
            List of Articles
            {
                props.articlesList.map(obj => <Article obj={obj} key={obj.id}/>)
            }
        </div>
    )
}
const List = Lists

export default connect(mapStateToProps)(List);