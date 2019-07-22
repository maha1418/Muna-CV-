import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"> CVمُـــنـــى</Link>} scroll>
            <Navigation>
                <Link to="/resume">رفع السيرة</Link>
                <Link to="/projects">عرض السير</Link>
                <Link to="/contact">تواصل معنا</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;