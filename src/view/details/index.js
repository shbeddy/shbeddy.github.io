import React, { Component } from 'react'
import {Card} from 'antd'
// import data from './data'
import axios from 'axios';
import {connect} from 'react-redux'

import DetailsContent from './details_content'
import DetailsReply from './details_reply'
 

class Details extends Component {
    constructor( arg ){
        super( arg )
        let id = this.props.match.params.id
        this.state = {
            id
        }
        this.getDetails(id)
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            data: nextProps.data.data,
            loading: nextProps.loading
        })
    }

    
    getDetails(id){
        this.props.dispatch((dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
                .then((res)=>{
                    dispatch({
                        type:'DATAILS_SUCC',
                        data:res
                    })
                })
                .catch((err)=>{

                })
        })
    }
    
    render() {
        let {loading,data} = this.props

        return (
            <div className={'wrap'}>
                <Card>
                    <DetailsContent
                        data = {data.data}
                        loading = {loading}
                    ></DetailsContent>
                    
                </Card>
                <DetailsReply
                    data = {data.data}
                    loading = {loading}
                ></DetailsReply>
            </div>
        )
    }
}
export default connect(state=>state.details)(Details)