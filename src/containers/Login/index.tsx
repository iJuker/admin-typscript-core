import React from 'react';
import { LoginFrom } from './components';
import { appCons } from 'util/appContext';
import { Redirect } from 'react-router-dom';
// interface User {
//     username: string;
//     password: string;
//     remember: boolean;
// }
const Index: React.FC = () => {
    const { isAuth, login } = appCons();

    function handleLogin() {
        login();
    }

    if (isAuth) return <Redirect to="/" />;
    return <LoginFrom onFinish={handleLogin} />;
};

export default Index;
