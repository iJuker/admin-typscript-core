import React, { Suspense } from 'react';
import { useState } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
import Loading from 'components/Loading';

import route from '_route';
import nav from '_nav';
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
    margin-top: 65px;
    padding: 20px;
    overflow: initial;
    min-height: 80vh;
`;
const CustomLoading = styled.div`
    position: relative !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

            <Layout style={{ marginLeft: collapsed ? 75 : 200 }}>
                {/* SECTION :: HEADER */}
                <Header />
                {/* SECTION :: CONTENT */}
                <WrapContent>
                    <Suspense
                        fallback={
                            <CustomLoading>
                                <Loading />
                            </CustomLoading>
                        }
                    >
                        <Switch>
                            {route.map((r) => (
                                <Route key={r.id} exact={r.exact} path={r.path} component={r.component} />
                            ))}
                            <Redirect from="/" to="/dashboard" />
                        </Switch>
                    </Suspense>
                </WrapContent>

                {/* SECTION :: FOOTER */}
                <Footer style={{ textAlign: 'center' }}>PAGE ADMIN CORE ©2020 Created by KOSAL</Footer>
            </Layout>
        </Layout>
    );
};
export default Index;
