import React, { Component } from 'react'
import { Tag } from 'antd';

const tab ={
    top:{
        color:'red',
        txt:'置顶'        
    },
    good:{
        color:'lime',
        txt:'精华'
    },
    ask:{
        color:'green',
        txt:'问答'
    },
    job:{
        color:'magenta',
        txt:'招聘'
    },
    dev:{
        color:'purple',
        txt:'测试'
    },
    share:{
        color:'orange',
        txt:'分享'
    },
    default:{
        color:'transparent'
    }
}

function getTag(data){
    return (
        data.top?'top':
            data.good?'good':
                data.tab||'dev'
    )
}

export default class TitleTag extends Component {
    
    render() {
        let nowTag = tab[getTag(this.props.item)]
        return (
            <Tag color = {nowTag.color}>{nowTag.txt}</Tag>
        )
    }
}
