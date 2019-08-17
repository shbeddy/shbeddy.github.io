import React,{Component} from 'react';
import RouterIndex from './router/router-index';
import MainHeader from './main-header';
import MainFooter from './main-footer';
import 'antd/dist/antd.css';
import './index.css';

export default class App extends Component {
  render() {
    return (
      <div className='page_wrap'>
        <MainHeader />
        <main className='main'>
          <RouterIndex />
        </main>
        <MainFooter />
      </div>
    )
  }
}

