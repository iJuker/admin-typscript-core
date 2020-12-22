// ============================================================================ COMPONENT ::
import Dashboard from './containers/Dashboard';

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
];

export default route;
