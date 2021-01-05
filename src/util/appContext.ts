import React from 'react';
interface User {
    id: string;
    fullName: string;
    gender: string;
}
interface AppContextProps {
    user?: User | null;
    isAuth: boolean;
    login: () => void;
    logout: () => void;
}
const AppCont = React.createContext({} as AppContextProps);
const appCons = (): AppContextProps => React.useContext(AppCont);
export { AppCont, appCons };
