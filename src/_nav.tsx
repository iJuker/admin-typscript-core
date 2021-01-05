import React from 'react';
import { DashboardOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
interface NavProps {
    id: number;
    path: string;
    name: string;
    icon?: React.ReactNode;
    children?: Array<NavProps>;
}
const nav: Array<NavProps> = [
    {
        id: 1,
        path: '/dashboard',
        name: 'Dashboard',
        icon: <DashboardOutlined />,
    },
    {
        id: 2,
        path: '/user',
        name: 'User',
        icon: <UserOutlined />,
        children: [
            {
                id: 1,
                path: '/user/add-user',
                name: 'Add User',
                icon: <UserAddOutlined />,
            },
        ],
    },
    {
        id: 3,
        path: '/driver',
        name: 'Driver',
        icon: <UserOutlined />,
        children: [
            {
                id: 1,
                path: '/driver/add-driver',
                name: 'Add Driver',
                icon: <UserAddOutlined />,
            },
        ],
    },
];

export default nav;
