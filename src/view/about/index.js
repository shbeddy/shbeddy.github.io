import React,{Component} from 'react'
import data from './data'
import {Card} from 'antd'

export default class About extends Component {
    render(){
        return (
            <div className = {'wrap'}>
                {data.map((item, index)=>{
                    return (
                        <Card 
                            key={index}
                            title = {item.title}
                            type = {"inner"}
                        >
                            <div
                                className = {'about_txt'}
                                dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}
                            >

                            </div>
                        </Card>
                    )
                    
                })}
            </div>
        )
    }
}
