"use client";

import {
    AccountBookOutlined,
    AppstoreOutlined,
    BarChartOutlined,
    BellOutlined,
    DashboardOutlined,
    DownOutlined,
    InboxOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
    SettingOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    Avatar,
    Badge,
    Button,
    Dropdown,
    Input,
    Layout,
    Menu,
    Select,
    theme,
    type MenuProps,
} from 'antd';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import './petra-layout.css';

const { Header, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

// ─── Helper ───────────────────────────────────────────────────────────────────
// Leaf items (href provided) wrap their label in a <Link>.
// Parent items (no href) just show plain text — clicking expands the submenu.
function makeItem(
    label: string,
    key: string,
    icon?: React.ReactNode,
    children?: MenuItem[],
    href?: string
): MenuItem {
    return {
        key,
        icon,
        children,
        label: href ? <Link to={href}>{label}</Link> : label,
    } as MenuItem;
}

// ─── Menu items ───────────────────────────────────────────────────────────────
const menuItems: MenuItem[] = [
    makeItem('Dashboard', 'dashboard', <DashboardOutlined />, undefined, '/dashboard'),

    makeItem('Field Force', 'field-force', <UserOutlined />, [
        makeItem('Force Menu 1', 'ff-1', undefined, undefined, '/field-force/menu-1'),
        makeItem('Force Menu 2', 'ff-2', undefined, undefined, '/field-force/menu-2'),
    ]),

    makeItem('Sales & Demand', 'sales', <ShoppingOutlined />, [
        makeItem('Sales Menu 1', 'sales-1', undefined, undefined, '/sales/menu-1'),
        makeItem('Sales Menu 2', 'sales-2', undefined, undefined, '/sales/menu-2'),
    ]),

    makeItem('Inventory', 'inventory', <InboxOutlined />, [
        makeItem('Stock On Hand', 'stock-on-hand', undefined, undefined, '/inventory/stock-on-hand'),
        makeItem('Products', 'products', undefined, undefined, '/inventory/products'),
        makeItem('Fixed Asset', 'fixed-asset', undefined, undefined, '/inventory/fixed-asset'),
        makeItem('Good Receipt (GRN)', 'good-receipt', undefined, undefined, '/inventory/good-receipt'),
        makeItem('Stock Transfer', 'stock-transfer', undefined, undefined, '/inventory/stock-transfer'),
        makeItem('Adjustment & Write-off', 'adjustment', undefined, undefined, '/inventory/adjustment'),
        makeItem('Warehouse Map', 'warehouse-map', undefined, undefined, '/inventory/warehouse-map'),
    ]),

    makeItem('Purchase', 'purchase', <ShoppingCartOutlined />, [
        makeItem('Purchase Menu 1', 'purchase-1', undefined, undefined, '/purchase/menu-1'),
        makeItem('Purchase Menu 2', 'purchase-2', undefined, undefined, '/purchase/menu-2'),
    ]),

    makeItem('Accounting', 'accounting', <AccountBookOutlined />, [
        makeItem('Accounting Menu 1', 'accounting-1', undefined, undefined, '/accounting/menu-1'),
        makeItem('Accounting Menu 2', 'accounting-2', undefined, undefined, '/accounting/menu-2'),
    ]),

    makeItem('Reports & Analytics', 'reports', <BarChartOutlined />, [
        makeItem('Report Menu 1', 'report-1', undefined, undefined, '/reports/menu-1'),
        makeItem('Report Menu 2', 'report-2', undefined, undefined, '/reports/menu-2'),
    ]),
];

// ─── Path → menu key map ──────────────────────────────────────────────────────
// Keeps the active highlight in sync when navigating via URL (back/forward, etc.)
const pathToKey: Record<string, string> = {
    '/dashboard': 'dashboard',
    '/field-force/menu-1': 'ff-1',
    '/field-force/menu-2': 'ff-2',
    '/sales/menu-1': 'sales-1',
    '/sales/menu-2': 'sales-2',
    '/sales/menu-6': 'sales-6',
    '/inventory/stock-on-hand': 'stock-on-hand',
    '/inventory/products': 'products',
    '/inventory/fixed-asset': 'fixed-asset',
    '/inventory/good-receipt': 'good-receipt',
    '/inventory/stock-transfer': 'stock-transfer',
    '/inventory/adjustment': 'adjustment',
    '/inventory/warehouse-map': 'warehouse-map',
    '/purchase/menu-1': 'purchase-1',
    '/purchase/menu-2': 'purchase-2',
    '/accounting/menu-1': 'accounting-1',
    '/accounting/menu-2': 'accounting-2',
    '/reports/menu-1': 'report-1',
    '/reports/menu-2': 'report-2',
};

const profileMenu = {
    items: [
        { key: 'profile', label: 'My Profile' },
        { key: 'settings', label: 'Settings' },
        { type: 'divider' as const },
        { key: 'logout', label: 'Sign Out' },
    ],
};

// ─── Component ────────────────────────────────────────────────────────────────
const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const { pathname } = useLocation();

    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState<string[]>(['inventory']);

    // Derive selected key from URL — no manual onClick tracking needed
    const selectedKey = pathToKey[pathname] ?? 'dashboard';

    return (
        <Layout hasSider>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ overflow: 'auto', height: '100vh' }}
                width={220}
                className="petra-sider"
            >
                {/* Logo */}
                <div className="logo-vertical sticky top-0 z-10">
                    <div className="logo-vertical-circle">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4h7a5 5 0 0 1 0 10H9v6H6V4zm3 3v4h4a2 2 0 0 0 0-4H9z" />
                        </svg>
                    </div>
                    <span className={`logo-vertical-text ${collapsed ? 'hidden' : ''}`}>
                        Petra Products
                    </span>
                </div>

                {/* Menu */}
                <Menu
                    className="petra-menu"
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    openKeys={collapsed ? [] : openKeys}
                    onOpenChange={(keys) => setOpenKeys(keys)}
                    items={menuItems}
                    inlineCollapsed={collapsed}
                />
            </Sider>

            <Layout>
                {/* Header */}
                <Header className="petra-header">
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: '16px', width: 40, height: 40 }}
                    />

                    <Input
                        className="petra-search"
                        prefix={<SearchOutlined />}
                        placeholder="Search in items"
                        style={{ flex: '0 0 300px' }}
                    />

                    <div style={{ flex: 1 }} />

                    <Select
                        className="petra-warehouse-select"
                        defaultValue="radiant"
                        style={{ width: 160 }}
                        suffixIcon={<DownOutlined style={{ fontSize: 11 }} />}
                        options={[
                            { value: 'radiant', label: 'Radiant Pharma' },
                            { value: 'central', label: 'Central — Karachi' },
                            { value: 'lahore', label: 'Lahore Regional' },
                        ]}
                    />

                    <Badge count={3} size="small" offset={[-4, 4]}>
                        <div className="petra-icon-btn">
                            <BellOutlined style={{ fontSize: 16 }} />
                        </div>
                    </Badge>

                    <div className="petra-icon-btn">
                        <SettingOutlined style={{ fontSize: 16 }} />
                    </div>

                    <div className="petra-icon-btn">
                        <AppstoreOutlined style={{ fontSize: 16 }} />
                    </div>

                    <Dropdown menu={profileMenu} trigger={['click']} placement="bottomRight">
                        <div className="petra-profile">
                            <Avatar
                                style={{ background: '#cc1f2a', fontWeight: 700, fontSize: 13 }}
                                size={30}
                            >
                                AK
                            </Avatar>
                            {!collapsed && (
                                <div className="petra-profile-info">
                                    <span className="petra-profile-name">Arab Khan</span>
                                    <span className="petra-profile-role">Warehouse Manager</span>
                                </div>
                            )}
                            <DownOutlined style={{ fontSize: 10, color: '#90a4ae', marginLeft: 2 }} />
                        </div>
                    </Dropdown>
                </Header>

                {/* Content */}
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