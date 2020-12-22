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
    },
];

export default nav;
