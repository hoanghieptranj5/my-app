import './App.css';
import { useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';

import CalculateElectricWrapper from './Component/CalculatedTable/CalculateElectricWrapper';
import HanziContainer from './Component/HanziCard/HanziContainer';
import SearchSingle from './Component/Search/SearchSingle';
import Login from './Component/Login/Login';
import { generateBreadcrumbItems } from './Component/Breadcrumb/BreadcrumbHelper';
import LunchSplitter from './Component/LunchSplitter/LunchSplitter';

const { Header, Content, Sider } = Layout;

const navigationMenuItems: MenuProps['items'] = ['Calculator', 'HanziCard', 'Lunch'].map(key => ({
  key,
  label: <Link className="nav-link" to={`${key}`}>{key}</Link>,
}));

const sideBarMenuItems: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
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

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const location = useLocation();
  const navigationBar = useSelector((state) => state.navigationBar);

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[navigationBar.selectedPage]}
              items={navigationMenuItems} />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={sideBarMenuItems}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {generateBreadcrumbItems(location)}
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/lunch" element={<LunchSplitter />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <CalculateElectricWrapper />
                </ProtectedRoute>
              } />
              <Route path="/Calculator" element={
                <ProtectedRoute>
                  <CalculateElectricWrapper />
                </ProtectedRoute>
              } />
              <Route path="/HanziCard" element={
                <ProtectedRoute>
                  <HanziContainer />
                </ProtectedRoute>
              } />
              <Route path="/SearchSingle" element={
                <ProtectedRoute>
                  <SearchSingle />
                </ProtectedRoute>
              } />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
