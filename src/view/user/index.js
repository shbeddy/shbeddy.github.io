import React, { Component } from 'react'
import {Card, Avatar, Row, Col} from "antd";
import {connect} from "react-redux";
import axios from "axios";
// import data from './data'

import UserList from './user-list'

 class User extends Component {
    constructor( arg ){
        super( arg )
        let loginname = this.props.match.params.id;
        
        this.state = {
            loginname,
            // avatar_url:data.data.avatar_url,
            // recent_topics:data.data.recent_topics,
            // recent_replies:data.data.recent_replies
        }
        this.getUser(loginname)
    }

    

    shouldComponentUpdate(nextProps, nextState) {

        let loginname = nextProps.match.params.id
        if(loginname !== this.state.loginname){
            this.setState({
                loginname
            });
            this.getUser(loginname)
            return false
        }

        
        return true
    }

    getUser(name){
        this.props.dispatch((dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/user/${name}`)
                    .then((res)=>{
                        // console.log(res)
                        dispatch({
                            type:'USER_UPDATA_SUCC',
                            data:res.data
                        })
                    })
                    .catch((err)=>{
                        // console.log(err)
                    })
                    
        })
    }
    render() {
        // console.log(this.props)
        let data = this.props.data
        let create_at = data.create_at?data.create_at.split('T')[0]:''
        return (
            <div className = {'wrap'}>
                <Card
                    title = {
                        <div>
                            <Avatar
                                src={data.avatar_url}
                                className = "userAvatar"
                            />
                            <Row className="userInfo">
                                <Col md={8} xs={24}>
                                    {<span>用户名:<a>{data.loginname}</a></span>}
                                </Col>
                                <Col md={8} xs={24}>
                                    {<span>积分:{data.score}</span>}
                                </Col>
                                <Col md={8} xs={24}>
                                    {<span>注册时间:{create_at}</span>}
                                </Col>
                            </Row>
                        </div>
                        
                    }
                >
                    <UserList
                        title = "最近创建的话题"
                        data={data.recent_topics}
                    ></UserList>
                    <UserList
                        title = "最近回复的话题"
                        data={data.recent_replies}
                    ></UserList>
                </Card>    
            </div>
        )
    }
}
export default connect(state=>(state.user))(User);