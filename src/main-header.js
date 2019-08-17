import React, { Component } from 'react'
import { Layout, Menu,Row,Col,Divider,Icon } from 'antd';
import {Link} from 'react-router-dom'


export default class MainHeader extends Component {
    render() {
        return (
            // <div>
                <Layout.Header>
                    <Row className={'header wrap'}>
                        <Col md={6}>
                            <h1>discussion</h1>
                            
                        </Col>
                        
                        <Col md={18} >
                            <Divider 
                                type={'vertical'} 
                                className={'header_divider'} 
                            />
                            <Menu
                                mode='horizontal'
                                theme='light'
                                className={'header_menu'}
                            >
                                <Menu.Item >
                                    <Link 
                                        to='/index/all' 
                                        // component={'Index'}
                                    >
                                        <Icon type={'home'} />
                                        首页
                                    </Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link to='/book' component={'Book'}>
                                        <Icon type={'book'} />
                                        教程
                                    </Link>
                                </Menu.Item> 
                                <Menu.Item >
                                    <Link to='/about' component={'About'}>
                                        <Icon type="exclamation-circle" />
                                        关于
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                   
                </Layout.Header>



                
            // </div>
        )
    }
}
