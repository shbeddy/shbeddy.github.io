import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu} from 'antd';

export default class IndexMenu extends Component {
    render() {
        return (
            <Menu
                mode='vertical'
                theme='light'
                className={'nav'}
            >
                <Menu.Item >
                    <Link 
                        to='/index/all' 
                        component={'Index'}
                    >
                        全部
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/index/good' component={'Good'}>
                        精华
                    </Link>
                </Menu.Item> 
                <Menu.Item >
                    <Link to='/index/ask' component={'Ask'}>
                        问答
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/index/share' component={'Share'}>
                        分享
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/index/job' component={'Job'}>
                        招聘
                    </Link>
                </Menu.Item>
                <Menu.Item >
                    <Link to='/index/dev' component={'Dev'}>
                        测试
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}
