import React, { Component } from 'react'
import {List, Avatar, Card, Col} from "antd";
import {Link} from 'react-router-dom'

export default class UserList extends Component {
    constructor(){
        super(...arguments)
        // console.log(this.props);
        this.state={
            data:{}
        }
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps)
    //     return true
    // }
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps.data.recent_topics)
    //     this.setState={
    //         data:nextProps.data.recent_topics
    //     }
    // }
    render() {
        let data = this.props.data
        let title = this.props.title
        // console.log(data);
        return (
            <div>
                <Card
                    title = {title}
                >
                    <List
                    // loading = {loading}
                        dataSource = {data}
                        renderItem = {
                            item => (<List.Item
                                className = {'list_item'}
                                actions={[
                                    '最后回复：'+item.last_reply_at.split('T')[0]
                                ]}
                            >
                                <List.Item.Meta
                                    avatar = {
                                        
                                        <Avatar src={item.author.avatar_url}></Avatar>
                                        
                                        
                                    }
                                    title = {
                                        <div>
                                            <span style={{marginRight:'10px'}}>
                                                <Link to={`/user/${item.author.loginname}`}>
                                                    {item.author.loginname}
                                                </Link>
                                            </span>
                                            <Link to={'/details/'+item.id}>
                                                {item.title}
                                            </Link>
                                        </div>
                                    }
                                    
                                >

                                </List.Item.Meta>
                            </List.Item>)
                        }
                    >
                        
                        
                    </List>
                </Card>
                
            </div>
        )
    }
}
