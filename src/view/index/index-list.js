import React, { Component } from 'react'
// import data from './data'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { List,Avatar } from 'antd';
import TitleTag from './title-tag';
import axios from 'axios';

 class IndexList extends Component {
    constructor(arg){
        super(arg)
        this.state = {
            page:1
        }
        this.getData(this.props.tab, this.state.page)
    }
    getData(tab,page){
        
        this.props.dispatch((dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=20`)
                    .then((res)=>{
                        // console.log(res)
                        dispatch({
                            type:'LIST_UPDATA_SUCC',
                            data:res.data
                        })
                    })
                    .catch((err)=>{
                        // console.log(err)
                    })
                    
        })

    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.page !== nextState.page){
            this.getData( nextProps.tab , nextState.page )
        }

        if(this.props.tab !== nextProps.tab){
            this.setState({
                page:1
            })
            this.getData(nextProps.tab, 1)
        }
        return true
    }
    
    
    render() {
        // console.log(this.props)
        let {loading,data} = this.props
        const pagination = {
            current:this.state.page,
            pageSize:20,
            total:500,
            onChange:((current)=>{
                this.setState({
                    page:current
                })
            })
        }
        return (
            <List
                
                loading = {loading}
                dataSource = {data}
                pagination = {pagination}
                renderItem = {
                    item => (<List.Item
                        className = {'list_item'}
                        actions={[
                            '回复：'+item.reply_count,
                            '访问：'+item.visit_count
                        ]}
                    >
                        <List.Item.Meta
                            avatar = {
                                <Avatar src={item.author.avatar_url}></Avatar>
                            }
                            title = {
                                <div>
                                    <TitleTag item={item}></TitleTag>
                                    <Link to={'/details/'+item.id}>{item.title}
                                        </Link>
                                </div>
                            }
                            description = {
                                <p>
                                    <Link to={'/user/'+item.author.loginname}>{item.author.loginname}
                                    </Link>

                                    {item.last_reply_at.split('T')[0]}
                                </p>
                            }
                        >

                        </List.Item.Meta>
                    </List.Item>)
                }
            >
                
                
            </List>
        )
    }
}
export default   connect(state=>state.list)(IndexList)