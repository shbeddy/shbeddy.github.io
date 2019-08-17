import React, { Component } from 'react'
import { List,Avatar,Card } from 'antd';
import {Link} from 'react-router-dom'

export default class DetailsReply extends Component {
    constructor(  ){
        super( ...arguments )
        this.state = {
            data:{}
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            data: nextProps.data,
            loading: nextProps.loading
        })
    }
    
    render() {
        let replies = this.state.data.replies
        let reply_count = this.state.data.reply_count
        return (
            <Card 
                // loading = {loading}
                title = {reply_count + "回复"}
                type = "inner"
            >
                <List
                    className = {'reply_list'}
                    dataSource = {replies}
                    itemLayout = {'vertical'}
                    renderItem = {
                        item => (<List.Item
                            className = {'list_item'}
                            extra = {
                                item.ups.length?<span className={'reply'}>有{ item.ups.length}人赞了这条评论</span>:''
                                }
                        >
                            <List.Item.Meta
                                avatar = {
                                    <Avatar 
                                        src={item.author.avatar_url}></Avatar>
                                }
                                description = {
                                    <span>
                                        <Link to={'/user/'+ item.author.loginname}>{item.author.loginname}
                                            </Link>
                                        <span>发表于{item.create_at.split('T')[0]}</span>    
                                    </span>
                                }
                                
                            >

                            </List.Item.Meta>
                            <div 
                                className = {'reply_item'}
                                dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}
                            > 
                            </div>
                        </List.Item>)
                    }
                >
                    
                    
                </List>
            </Card>
            
        )
    }
}
