import './App.css';
import {Link} from "react-router-dom";

import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Breadcrumb, Layout, Menu} from 'antd';
import React, {useEffect, useState} from 'react';
import {store} from './Redux/Store';
import {Provider} from 'react-redux';

import DynamicContent from "./Component/DynamicContent";

const {Header, Content, Sider} = Layout;

const items1: MenuProps['items'] = ['Calculator', 'Users', 'Hanzi'].map(key => ({
  key,
  label: `${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const App = () => {
  const [page, setPage] = useState(1);

  const onClick = e => {
    setPage(e.key);
  }

  return (
    // <div className="App">
    //   <Link to="/axios">Axios</Link> |{" "}
    //   <Link to="/calculate-electric-Page">Page</Link> |{" "}
    //   <Link to="/table">Table</Link>
    // </div>
    <Layout>
      <Header className="header">
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Users']} items={items1} onClick={onClick}/>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
            items={items2}
          />
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Provider store={store}>
              <DynamicContent
                page={page}
              />
            </Provider>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
