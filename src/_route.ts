import React from 'react';
// ============================================================================ COMPONENT ::
const Dashboard = React.lazy(() => import('containers/Dashboard'));

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
        id: 'dashboard1',
        path: '/dashboard1',
        exact: true,
        name: 'Dashboard',
        component: Dashboard,
    },
];

export default route;
