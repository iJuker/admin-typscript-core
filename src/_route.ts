import React from 'react';
// ============================================================================ COMPONENT ::
const Dashboard = React.lazy(() => import('containers/Dashboard'));
const User = React.lazy(() => import('containers/User'));

// ============================================================================ ROUTE ::
interface PropRoute {
    id?: string;
    path: string;
    exact?: boolean;
    name?: string;
    component: React.FunctionComponent;
}

const route: Array<PropRoute> = [
    {
        id: 'dashboard',
        path: '/dashboard',
        exact: true,
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        id: 'user',
        path: '/user',
        exact: true,
        name: 'User',
        component: User,
    },
    {
        id: 'addUser',
        path: '/user/add-user',
        exact: true,
        name: 'User',
        component: User,
    },
];

export default route;
