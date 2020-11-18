// import React from 'react'
// import 'antd/dist/antd.css'
// import { NavLink, Route, Router } from 'react-router-dom'


// import { Layout, Menu, Breadcrumb } from 'antd';

// const { Header, Content, Footer } = Layout;

// export const AdminTemplate = (props) => {

//     const { Component, ...restParams } = props

//     return <Route {...restParams} render={(propsRoute) => {
//         // const {ckollapsed} = state
//         return <>
//             <Layout className="layout">
//                 <Header>
//                     <div className="logo" />
//                     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
//                         <Menu.Item key="1">nav 1</Menu.Item>
//                         <Menu.Item key="2">nav 2</Menu.Item>
//                         <Menu.Item key="3">nav 3</Menu.Item>
//                     </Menu>
//                 </Header>
//                 <Content style={{ padding: '0 50px' }}>
//                     <Breadcrumb style={{ margin: '16px 0' }}>
//                         <Breadcrumb.Item>Home</Breadcrumb.Item>
//                         <Breadcrumb.Item>List</Breadcrumb.Item>
//                         <Breadcrumb.Item>App</Breadcrumb.Item>
//                     </Breadcrumb>
//                     <div className="site-layout-content">Content</div>
//                 </Content>
//                 <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//             </Layout>
//         </>
//     }} />
// }


import React, { useState } from 'react'
import { NavLink, Route, Router } from 'react-router-dom'
import 'antd/dist/antd.css'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    ReconciliationOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {

    const [state, setState] = useState({
        collapsed: false,
    })

    const onCollapse = collapsed => {
        console.log(collapsed);
        setState({ collapsed });
    };

    const { Component, ...restParams } = props

    return <Route {...restParams} render={(propsRoute) => {
        const { collapsed } = state;
        return <>
            <Layout style={{ minHeight: '100vh' }}>

                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                        <div className="py-4 text-center">
                            <img src="../assets/img/movielogin.jpg" style={{ borderRadius: '50%', width: 50, height: 50 }} />
                            {!collapsed ? <div className="mt-3 ml-1">
                                <span>ELTR</span>
                            </div> : ''}
                        </div>

                        <SubMenu key="sub1" icon={<ReconciliationOutlined />} title="Films">
                            <Menu.Item key="3">
                                <NavLink to='/admin/quanlyphim'>Quan ly phim</NavLink>
                            </Menu.Item>
                            <Menu.Item key="4">Them moi phim (xài modal để thêm phim nhanh</Menu.Item>

                        </SubMenu>

                        <SubMenu key="sub2" icon={<UserOutlined />} title="User">
                            <Menu.Item key="6">
                                <NavLink to='/admin/quanlynguoidung'>Quan ly nguoi dung</NavLink>
                            </Menu.Item>
                            <Menu.Item key="8">
                                Them moi nguoi dung
                            </Menu.Item>
                        </SubMenu>

                        {/* <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item> */}
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <Component {...propsRoute} className="site-layout-background" style={{ padding: 24, minHeight: 360 }} />

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>ELTR Design ©2018 Created by ELTR SC</Footer>
                </Layout>

            </Layout>
        </>
    }} />
}
