import React, { ReactText, useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
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
    const [openKey, setOpenKey] = useState<string[]>([]);

    function onOpenChange(e: ReactText[]): void {
        const latestOpenKey = e.find((key) => openKey.indexOf(key as string) === -1);
        setOpenKey([latestOpenKey] as string[]);
    }
    return (
        <Menu
            theme="dark"
            mode="inline"
            openKeys={openKey}
            onOpenChange={onOpenChange}
            selectedKeys={[pathname]}
            defaultSelectedKeys={['dashboard']}
        >
            {nav.map((n) =>
                n.children ? (
                    <SubMenu title={n.name} key={n.path} icon={n.icon}>
                        {n.children.map((c) => (
                            <Menu.Item key={c.path} icon={c.icon}>
                                <Link key={c.path} to={c.path}>
                                    {c.name}
                                </Link>
                            </Menu.Item>
                        ))}
                    </SubMenu>
                ) : (
                    <Menu.Item key={n.path} icon={n.icon}>
                        <Link to={n.path}>{n.name} </Link>
                    </Menu.Item>
                ),
            )}
        </Menu>
    );
};

export default Index;
