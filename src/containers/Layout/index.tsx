import React from 'react';
import { useState } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';

import route from '../../_route';
import nav from '../../_nav';
import { Header, SideBar } from './components';

const { Content, Footer, Sider } = Layout;

// STYLE
const WrapSider = styled(Sider)`
    position: fixed;
    left: 0;
    height: 100vh;
    z-index: 100;
`;

const Logo = styled.div`
    margin: 15px 2px;
`;

const LogoText = styled.h1`
    color: #fff;
    text-align: center;
`;

const LogoSubText = styled.span`
    background-color: #1890ff;
    padding: 2px 15px;
    font-size: 20px;
    border-radius: 5px;
`;

const WrapContent = styled(Content)`
    margin: 24px 16px 0;
    overflow: initial;
    min-height: 80vh;
    margin-top: 50px;
`;

const Index: React.FC = () => {
    // STATE
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { pathname } = useLocation();

    return (
        <Layout>
            <WrapSider collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} breakpoint="sm" collapsible>
                {/* SECTION :: LOGO */}
                <Logo>
                    <LogoText>
                        <LogoSubText>PAGE</LogoSubText> <span>ADMIN</span>
                    </LogoText>
                </Logo>

                {/* SECTION :: LEFT BAR */}
                <SideBar pathname={pathname} nav={nav} />
            </WrapSider>

            <Layout style={{ marginLeft: collapsed ? 0 : 200 }}>
                {/* SECTION :: HEADER */}
                <Header />
                {/* SECTION :: CONTENT */}
                <WrapContent>
                    <div style={{ padding: 24, textAlign: 'center' }}>
                        <Switch>
                            {route.map((r) => (
                                <Route key={r.id} exact={r.exact} path={r.path} component={r.component} />
                            ))}
                            <Redirect to="/404" />
                        </Switch>
                    </div>
                </WrapContent>

                {/* SECTION :: FOOTER */}
                <Footer style={{ textAlign: 'center' }}>PAGE ADMIN CORE ©2020 Created by KOSAL</Footer>
            </Layout>
        </Layout>
    );
};
export default Index;
