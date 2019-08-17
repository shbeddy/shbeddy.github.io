import React, { Component } from 'react'
import {Card,Avatar} from 'antd'
import {Link} from 'react-router-dom'


import TitleTag from '../index/title-tag';



export default class DetailsContent extends Component {
    constructor(  ){
        super( ...arguments )
        this.state = {
            data:{
                title:'',
                author:{},
                create_at:''
            }
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            data: nextProps.data,
            loading: nextProps.loading
        })
    }
    render() {
        const data = this.state.data
        return (
            <div>
                <Card.Meta
                        title = {
                            <div>
                                <h2> {data.title}</h2>
                                <div>
                                    <TitleTag item={data}></TitleTag>
                                    <Link to={`/use/${data.author_id}`}>
                                        <Avatar src={data.author.avatar_url}></Avatar>
                                        {data.author.loginname}
                                    </Link>
                                    <span>发表于{data.create_at.split('T')[0]}</span>
                                </div>
                            </div>
                           
                        }
                    >

                    </Card.Meta>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:data.content
                        }}
                    >

                    </div>
            </div>
        )
    }
}
