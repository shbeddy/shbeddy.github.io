import React, { Component } from 'react'
import { Row,Col } from 'antd';


import IndexMenu from './index-menu'
import IndexList from './index-list'


export default class Index extends Component {
    render() {
        let tab = this.props.match.params.id
        return (
            <div>
                <Row className={'wrap'}>
                        <Col md={6}>
                            <IndexMenu></IndexMenu>
                        </Col>
                        
                        <Col md={18} style={{borderLeft:'1px solid #e6e6e6'}}>
                            <IndexList
                                tab = {tab}
                            ></IndexList>
                        </Col>
                    </Row>
            </div>
        )
    }
}