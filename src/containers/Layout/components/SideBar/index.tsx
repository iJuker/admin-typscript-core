import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

interface Nav {
    id: number;
    path: string;
    name: string;
    icon?: React.ReactNode;
    children?: Array<Nav>;
}

interface SideBarProps {
    nav: Array<Nav>;
    pathname: string;
}

const Index: React.FC<SideBarProps> = ({ nav, pathname }) => {
    return (
        <Menu theme="dark" mode="inline" selectedKeys={[pathname]} defaultSelectedKeys={['dashboard']}>
            {nav.map((n) => (
                <Menu.Item key={n.path} icon={n.icon}>
                    <Link to={n.path}>{n.name} </Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default Index;
