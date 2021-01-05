import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Loading from 'components/Loading';
import { wrapComponent } from './components';
import Protect from './components/HOC/ProtectRoute';

const Layout = React.lazy(() => import('containers/Layout'));
const Login = React.lazy(() => import('containers/Login'));

interface User {
    id: string;
    fullName: string;
    gender: string;
}

interface AppProps {
    user?: User | null;
    isAuth: boolean;
}
const CustomLoading = styled.div`
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const App: React.FC<AppProps> = ({ isAuth }) => {
    console.log(isAuth);
    return (
        <Suspense
            fallback={
                <CustomLoading>
                    <Loading />
                </CustomLoading>
            }
        >
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Protect isAuth={isAuth} path="/" component={Layout} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
};

export default wrapComponent(App);
