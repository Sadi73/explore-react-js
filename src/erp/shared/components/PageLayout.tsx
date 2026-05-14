import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout hasSider>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                        {
                            key: '4',
                            icon: <UserOutlined />,
                            label: 'nav 4',
                        },
                        {
                            key: '5',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 5',
                        },
                        {
                            key: '6',
                            icon: <UploadOutlined />,
                            label: 'nav 6',
                        },
                        {
                            key: '7',
                            icon: <UserOutlined />,
                            label: 'nav 7',
                        },
                        {
                            key: '8',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 8',
                        },
                        {
                            key: '9',
                            icon: <UploadOutlined />,
                            label: 'nav 9',
                        },
                        {
                            key: '10',
                            icon: <UserOutlined />,
                            label: 'nav 10',
                        },
                        {
                            key: '11',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 11',
                        },
                        {
                            key: '12',
                            icon: <UploadOutlined />,
                            label: 'nav 12',
                        },
                        {
                            key: '13',
                            icon: <UserOutlined />,
                            label: 'nav 13',
                        },
                        {
                            key: '14',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 14',
                        },
                        {
                            key: '15',
                            icon: <UploadOutlined />,
                            label: 'nav 15',
                        },
                        {
                            key: '16',
                            icon: <UserOutlined />,
                            label: 'nav 16',
                        },
                        {
                            key: '17',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 17',
                        },
                        {
                            key: '18',
                            icon: <UploadOutlined />,
                            label: 'nav 18',
                        },
                        {
                            key: '19',
                            icon: <UserOutlined />,
                            label: 'nav 19',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default PageLayout;