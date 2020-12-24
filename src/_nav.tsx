import React from 'react';
import { DashboardOutlined } from '@ant-design/icons';
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
        path: '/dashboard1',
        name: 'Dashboard1',
        icon: <DashboardOutlined />,
    },
];

export default nav;
